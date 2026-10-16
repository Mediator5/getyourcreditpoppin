import { NextResponse } from "next/server";
import { emailShell, esc, getTransporter } from "@/lib/mailer";

export const runtime = "nodejs";

type Payload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  goal?: string;
  message?: string;
  consent?: boolean;
  source?: string;
  company?: string; // honeypot
};

// Basic in-memory rate limit: 5 submissions per IP per 10 minutes.
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const clean = (v: unknown, max = 200) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bots fill the hidden field — pretend success and do nothing.
  if (clean(body.company)) return NextResponse.json({ ok: true });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please call us instead or try again later." }, { status: 429 });
  }

  const firstName = clean(body.firstName, 60);
  const lastName = clean(body.lastName, 60);
  const email = clean(body.email, 120);
  const phone = clean(body.phone, 30);
  const goal = clean(body.goal, 80);
  const message = clean(body.message, 3000);
  const source = clean(body.source, 60) || "Website";

  if (!firstName || !lastName || !email || !phone || !goal) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (phone.replace(/\D/g, "").length < 10) {
    return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
  }
  if (!body.consent) {
    return NextResponse.json({ error: "Please agree to be contacted so we can reach you." }, { status: 400 });
  }

  const name = `${firstName} ${lastName}`;
  const fromName = process.env.CONTACT_FROM_NAME || "Get Your Credit Poppin";
  const from = `"${fromName}" <${process.env.GMAIL_USER}>`;
  const to = process.env.CONTACT_TO_EMAIL || process.env.GMAIL_USER;

  const row = (k: string, v: string) =>
    `<tr><td style="padding:10px 0;color:#5b6583;font-size:13px;width:130px;vertical-align:top">${k}</td><td style="padding:10px 0;font-size:15px;font-weight:600">${v}</td></tr>`;

  const leadHtml = emailShell(
    `New consultation request from ${esc(name)}`,
    `<table width="100%" style="border-collapse:collapse">
      ${row("Name", esc(name))}
      ${row("Email", `<a href="mailto:${esc(email)}" style="color:#1d4fe0">${esc(email)}</a>`)}
      ${row("Phone", `<a href="tel:${esc(phone.replace(/[^\d+]/g, ""))}" style="color:#1d4fe0">${esc(phone)}</a>`)}
      ${row("Goal", esc(goal))}
      ${row("Form", esc(source))}
      ${message ? row("Message", esc(message).replace(/\n/g, "<br>")) : ""}
    </table>
    <p style="margin-top:24px;font-size:13px;color:#5b6583">Reply directly to this email to respond to ${esc(firstName)}.</p>`,
  );

  try {
    const transporter = getTransporter();

    await transporter.sendMail({
      from,
      to,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `New lead: ${name} — ${goal}`,
      html: leadHtml,
      text: `New consultation request\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nGoal: ${goal}\nForm: ${source}\n${message ? `\nMessage:\n${message}\n` : ""}`,
    });

    if (process.env.SEND_AUTO_REPLY !== "false") {
      await transporter
        .sendMail({
          from,
          to: email,
          subject: "We got your request — let's get your credit poppin'!",
          html: emailShell(
            `Thanks, ${esc(firstName)}! 🎉`,
            `<p style="font-size:15px;line-height:1.7">We received your request for a free credit consultation. A member of our team will reach out shortly to get you scheduled.</p>
             <p style="font-size:15px;line-height:1.7">Can't wait? Call us any time at <a href="tel:+14052398853" style="color:#1d4fe0;font-weight:700">405.239.8853</a>.</p>
             <p style="font-size:15px;line-height:1.7;margin-top:24px">Talk soon,<br><strong>The Get Your Credit Poppin Team</strong></p>`,
          ),
          text: `Thanks, ${firstName}! We received your request for a free credit consultation. A member of our team will reach out shortly. Questions? Call 405.239.8853.\n\n— The Get Your Credit Poppin Team`,
        })
        .catch((err: unknown) => console.error("[contact] auto-reply failed:", err));
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed:", err);
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please call us at 405.239.8853." },
      { status: 500 },
    );
  }
}
