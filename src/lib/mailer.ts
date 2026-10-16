import nodemailer from "nodemailer";

let transporter: ReturnType<typeof nodemailer.createTransport> | null = null;

/** Reusable Gmail SMTP transporter (configured in .env.local). */
export function getTransporter() {
  if (transporter) return transporter;

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");
  if (!user || !pass) {
    throw new Error("Email is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD in .env.local");
  }

  const port = Number(process.env.SMTP_PORT || 465);
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port,
    secure: (process.env.SMTP_SECURE ?? String(port === 465)) === "true",
    auth: { user, pass },
  });
  return transporter;
}

export const esc = (v: string) =>
  v.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/** Wraps content in a simple branded HTML email shell. */
export function emailShell(title: string, body: string) {
  return `<!doctype html><html><body style="margin:0;background:#f5f7fc;font-family:Segoe UI,Helvetica,Arial,sans-serif;color:#0a1023">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 12px"><tr><td align="center">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid #e6e9f2">
      <tr><td style="background:#0a1023;padding:28px 32px">
        <div style="font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#ffffff99">Get Your Credit</div>
        <div style="font-size:24px;font-weight:800;color:#ffffff">Poppin<span style="color:#ff6b1a">!</span></div>
      </td></tr>
      <tr><td style="padding:32px">
        <h1 style="margin:0 0 20px;font-size:22px;line-height:1.3">${title}</h1>
        ${body}
      </td></tr>
      <tr><td style="padding:20px 32px;background:#f5f7fc;font-size:12px;color:#5b6583">
        Get Your Credit Poppin · 3030 NW Expressway, Suite 535, Oklahoma City, OK 73112 · 405.239.8853
      </td></tr>
    </table>
  </td></tr></table></body></html>`;
}
