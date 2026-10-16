// All photography is from Unsplash (free to use under the Unsplash License).
// Swap any ID below to change a photo everywhere it is used.

const u = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const img = {
  heroWoman: { src: u("1604933762021-54a5858c9832"), alt: "Woman with braids reviewing her credit on a laptop" },
  heroSmile: { src: u("1649705334412-b51e97c38248"), alt: "Smiling woman celebrating good news" },
  family: { src: u("1647616927583-1d44a79a38a5"), alt: "Happy family posing together at home" },
  familyHug: { src: u("1624272864537-8ecc72b67958"), alt: "Father hugging his child" },
  experts: { src: u("1573496358007-6fe62e3d9010"), alt: "Credit specialist working on a laptop in a bright office" },
  newHome: { src: u("1758523671285-9ff3f4e0ff38"), alt: "Couple happily moving into their new home" },
  movingBoxes: { src: u("1758523670991-ee93bc48d81d"), alt: "Couple carrying boxes into a new house" },
  couple: { src: u("1655683576616-c40706fa79f2"), alt: "Happy couple smiling outdoors" },
  coupleKitchen: { src: u("1606787503066-794bb59c64bc"), alt: "Couple cooking together at home" },
  manSmile: { src: u("1522529599102-193c0d76b5b6"), alt: "Man smiling confidently" },
  manLaptop: { src: u("1612299273045-362a39972259"), alt: "Man smiling while working on a laptop" },
  manLaptop2: { src: u("1594077810908-9ffd89d704ac"), alt: "Young man working on his laptop at home" },
  businessMan: { src: u("1758519291531-e96279895745"), alt: "Business owner laughing while checking his phone" },
  handshake: { src: u("1686771416282-3888ddaf249b"), alt: "Client and advisor shaking hands over paperwork" },
  cardOnline: { src: u("1563013544-824ae1b704d3"), alt: "Person paying online with a card" },
  cardPayment: { src: u("1556740720-776b84291f8e"), alt: "Card payment at a terminal" },
  keys: { src: u("1643804926339-e94f0a655185"), alt: "House keys on a wooden table" },
  documents: { src: u("1772588627373-729b0f47e5bb"), alt: "Reviewing financial documents with a calculator" },
  charts: { src: u("1762427354397-854a52e0ded7"), alt: "Desk with calculator and colorful charts" },
  phoneCall: { src: u("1686723726446-8b881f37ce62"), alt: "Woman on a phone call outside" },
  womanPhone: { src: u("1623619096678-71d4d958635e"), alt: "Woman checking her phone" },
  womanDesk: { src: u("1762160687270-1602d25749b6"), alt: "Woman working on a laptop surrounded by plants" },
};

export type Img = { src: string; alt: string };
