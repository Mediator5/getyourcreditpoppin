// All photography is from Unsplash (free to use under the Unsplash License).
// Each image was hand-picked for its section. Swap any ID to change a photo
// everywhere it is used.

const u = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const img = {
  // Hero
  heroLaptop: { src: u("1615891081220-9116de3e1afd"), alt: "Woman laughing while checking good news on her laptop" },
  heroCouple: { src: u("1571771826307-98d0d0999028"), alt: "Couple laughing together" },
  keysDoor: { src: u("1741156386380-0236c72eb6f9"), alt: "Holding the keys to a new home in the doorway" },

  // Homeownership
  movingIn: { src: u("1590464216837-85cd68b5cdd2"), alt: "Couple carrying boxes into their new home" },
  movingCouch: { src: u("1590464216822-9342156321f2"), alt: "Couple relaxing among moving boxes in their new place" },
  kitchenCouple: { src: u("1602780765205-532dc7f6ded3"), alt: "Couple smiling together in their new kitchen" },

  // Cars & money
  carKey: { src: u("1557598628-bdd7d0767917"), alt: "Woman proudly holding up the key to her new car" },
  carCouple: { src: u("1541253361369-0bad3e717ba5"), alt: "Couple embracing beside their car at sunset" },
  phoneApp: { src: u("1615890643735-6cd26210d646"), alt: "Woman smiling at her banking app on her phone" },
  phoneStudio: { src: u("1739271933163-8dcc7c8e8a3e"), alt: "Woman smiling at her phone" },

  // Business
  entrepreneur: { src: u("1611432579402-7037e3e2c1e4"), alt: "Confident businesswoman in a yellow blazer holding a tablet" },
  shopOwner: { src: u("1687422808248-f807f4ea2a2e"), alt: "Small business owner smiling behind his counter" },
  manSuit: { src: u("1631131431211-4f768d89087d"), alt: "Smiling professional in a blue suit" },

  // Working with us
  paperwork: { src: u("1743017523548-540a7a0b682b"), alt: "Couple reviewing their credit reports together" },
  consultation: { src: u("1739292774732-09443c4c9478"), alt: "Client and advisor talking through a plan" },
  reviewing: { src: u("1758525861882-39151c7a9804"), alt: "Two women going over paperwork and smiling" },
  officeTeam: { src: u("1573164713619-24c711fe7878"), alt: "Team working together on laptops" },
  officeFolder: { src: u("1573164713347-df1f7d6aeb03"), alt: "Professional reviewing a client folder" },
  yellowLaptop: { src: u("1707325345025-4a02a9bc5fc7"), alt: "Smiling woman at her laptop against a bright yellow wall" },

  // People & families
  celebrate: { src: u("1747848214256-34a8cd21abac"), alt: "Woman celebrating with both fists raised" },
  dadDaughter: { src: u("1513774415755-ab8d0ef5e23c"), alt: "Father and daughter smiling together" },
  dadDaughter2: { src: u("1580970727081-021c85d36531"), alt: "Proud father with his daughter" },
  momSon: { src: u("1597098469273-834bc9d81f0a"), alt: "Mother laughing with her son" },
  portraitA: { src: u("1662850886700-4ec19bd30d11"), alt: "Young woman smiling" },
  portraitB: { src: u("1561406636-b80293969660"), alt: "Woman with a big smile" },
  portraitC: { src: u("1508002366005-75a695ee2d17"), alt: "Woman laughing" },
  manSmile: { src: u("1522529599102-193c0d76b5b6"), alt: "Man smiling confidently" },
  glasses: { src: u("1573497019418-b400bb3ab074"), alt: "Smiling woman in glasses" },

  // Oklahoma City
  okcSkyline: { src: u("1592276480286-08b843b65726"), alt: "Oklahoma City skyline reflected at sunset" },
  okcTowers: { src: u("1594046759646-aa9798e00a34"), alt: "Downtown Oklahoma City towers at golden hour" },
};

export type Img = { src: string; alt: string };
