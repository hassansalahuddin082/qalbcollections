import { Product } from "./types";

export const products: Product[] = [
  {
    id: "cartier-tank",
    slug: "cartier-tank-leather",
    brand: "Cartier",
    name: "Tank Leather Dress Watch",
    collection: "Tank Collection",
    category: "Dress",
    price: 6499,
    compareAtPrice: 8999,
    currency: "Rs",
    shortDescription:
      "An icon of Art Deco design — a rectangular case, Roman numerals and a hand-stitched leather strap.",
    description:
      "The Tank Leather brings a century of design heritage to your wrist. Its clean rectangular silhouette, railway-track minute markers and blued sword hands are set inside a polished stainless steel case, finished with a genuine hand-stitched leather strap. A quiet, confident statement for the boardroom or a black-tie evening.",
    highlights: [
      "Iconic rectangular Art Deco case",
      "Sapphire-coated scratch-resistant crystal",
      "Genuine hand-stitched leather strap",
      "Available in 5 dial & strap colourways",
    ],
    images: ["/images/products/cartier/1.png", "/images/products/cartier/2.png"],
    variants: [
      { id: "black", label: "Midnight Black", colorHex: "#161616", image: "/images/products/cartier/1.png" },
      { id: "gold-black", label: "Gold & Black", colorHex: "#caa14b", image: "/images/products/cartier/2.png" },
      { id: "brown", label: "Chestnut Brown", colorHex: "#5a3a2a", image: "/images/products/cartier/1.png" },
      { id: "burgundy", label: "Burgundy", colorHex: "#5c1a2b", image: "/images/products/cartier/2.png" },
      { id: "navy", label: "Navy Croc", colorHex: "#1b2436", image: "/images/products/cartier/1.png" },
    ],
    specs: {
      movement: "Quartz",
      style: "Analog",
      caseMaterial: "Stainless Steel",
      caseDiameter: "25mm x 34mm",
      caseThickness: "6.5mm",
      dialColor: "Black",
      strapMaterial: "Genuine Leather",
      clasp: "Pin Buckle",
      waterResistance: "3 ATM (Splash Resistant)",
      warranty: "6 Month Machine Warranty",
      gender: "Unisex",
      origin: "Swiss Design",
      glass: "Sapphire-Coated Mineral",
    },
    badges: ["Bestseller"],
    rating: 4.8,
    reviewsCount: 132,
    inStock: true,
    wristFocus: { x: 24, y: 55, scale: 1.9 },
  },
  {
    id: "rolex-day-date",
    slug: "rolex-day-date-oyster",
    brand: "Rolex",
    name: "Day-Date Oyster Perpetual",
    collection: "Oyster Perpetual",
    category: "Luxury",
    price: 7999,
    compareAtPrice: 10999,
    currency: "Rs",
    shortDescription:
      "Two-tone steel and gold bracelet watch with a diamond-marked black dial and date window.",
    description:
      "A statement of prestige, the Day-Date Oyster Perpetual pairs a brushed and polished two-tone bracelet with a jet-black dial, faceted hour markers and a magnified date cyclops. The fluted gold-tone bezel and screw-down crown give it a commanding presence, whether worn to close a deal or celebrate one.",
    highlights: [
      "Two-tone stainless steel & gold-tone bracelet",
      "Magnified cyclops date window",
      "Fluted bezel with faceted hour markers",
      "Available in 4 dial colourways",
    ],
    images: ["/images/products/rolex/1.png", "/images/products/rolex/2.png"],
    variants: [
      { id: "black-gold", label: "Black & Gold", colorHex: "#caa14b", image: "/images/products/rolex/1.png" },
      { id: "silver", label: "Silver", colorHex: "#c9ccd1", image: "/images/products/rolex/2.png" },
      { id: "blue-gold", label: "Blue & Gold", colorHex: "#1c3a5e", image: "/images/products/rolex/1.png" },
      { id: "champagne", label: "Champagne", colorHex: "#d9c48f", image: "/images/products/rolex/2.png" },
    ],
    specs: {
      movement: "Automatic",
      style: "Analog",
      caseMaterial: "Two-Tone Stainless Steel",
      caseDiameter: "36mm",
      caseThickness: "11.7mm",
      dialColor: "Black",
      strapMaterial: "Stainless Steel Bracelet",
      clasp: "Folding Clasp with Safety Lock",
      waterResistance: "5 ATM (50m)",
      warranty: "6 Month Machine Warranty",
      gender: "Men",
      origin: "Swiss Design",
      glass: "Sapphire-Coated Mineral",
    },
    badges: ["Bestseller", "Limited"],
    rating: 4.9,
    reviewsCount: 208,
    inStock: true,
    wristFocus: { x: 62, y: 60, scale: 2.2 },
  },
  {
    id: "citizen-classic",
    slug: "citizen-classic-day-date",
    brand: "Citizen",
    name: "Classic Day-Date Quartz",
    collection: "Citizen Classic",
    category: "Classic",
    price: 3499,
    currency: "Rs",
    shortDescription:
      "A polished stainless steel everyday classic with a crisp day & date display and diamond-cut markers.",
    description:
      "Built for daily wear without compromising on refinement, the Classic Day-Date pairs a mirror-polished stainless steel bracelet with a crisp white dial, Roman numeral markers set with crystal accents, and an easy-read day/date window. A folding clasp keeps it secure through every handshake and commute.",
    highlights: [
      "Day & date complication",
      "Diamond-cut crystal hour markers",
      "Secure folding clasp bracelet",
      "Comes in Silver and Black finishes",
    ],
    images: [
      "/images/products/citizen-classic/1.png",
      "/images/products/citizen-classic/2.png",
      "/images/products/citizen-classic/3-black.png",
      "/images/products/citizen-classic/4-black.png",
    ],
    variants: [
      { id: "silver", label: "Polished Silver", colorHex: "#c9ccd1", image: "/images/products/citizen-classic/1.png" },
      { id: "black", label: "Onyx Black", colorHex: "#1a1a1a", image: "/images/products/citizen-classic/3-black.png" },
    ],
    specs: {
      movement: "Quartz",
      style: "Analog",
      caseMaterial: "Stainless Steel",
      caseDiameter: "38mm",
      caseThickness: "9mm",
      dialColor: "White / Black",
      strapMaterial: "Stainless Steel Bracelet",
      clasp: "Folding Clasp",
      waterResistance: "5 ATM (50m)",
      warranty: "6 Month Machine Warranty",
      gender: "Unisex",
      origin: "Japanese Design",
      glass: "Mineral Crystal",
    },
    badges: ["New"],
    rating: 4.6,
    reviewsCount: 94,
    inStock: true,
    wristFocus: { x: 44, y: 46, scale: 1.7 },
  },
  {
    id: "citizen-square",
    slug: "citizen-square-automatic",
    brand: "Citizen",
    name: "Square Automatic Two-Tone",
    collection: "Citizen Tsuyosa",
    category: "Sport",
    price: 5299,
    currency: "Rs",
    shortDescription:
      "A cushion-cased automatic with an integrated two-tone bracelet and sunray silver dial.",
    description:
      "Modern retro at its finest — the Square Automatic wears a cushion-shaped case with an integrated two-tone bracelet, gilt accents on the crown and clasp, and a sunburst silver dial that catches the light with every turn of the wrist. The exhibition-style automatic movement adds genuine mechanical character.",
    highlights: [
      "Integrated two-tone bracelet",
      "Automatic self-winding movement",
      "Sunray-brushed dial finish",
      "Date window at 4 o'clock",
    ],
    images: ["/images/products/citizen-square/1.png", "/images/products/citizen-square/2.png"],
    variants: [
      { id: "two-tone", label: "Steel & Gold", colorHex: "#caa14b", image: "/images/products/citizen-square/1.png" },
    ],
    specs: {
      movement: "Automatic",
      style: "Analog",
      caseMaterial: "Two-Tone Stainless Steel",
      caseDiameter: "39mm",
      caseThickness: "12mm",
      dialColor: "Silver",
      strapMaterial: "Stainless Steel Bracelet",
      clasp: "Butterfly Deployant",
      waterResistance: "5 ATM (50m)",
      warranty: "6 Month Machine Warranty",
      gender: "Men",
      origin: "Japanese Design",
      glass: "Sapphire-Coated Mineral",
    },
    badges: ["New", "Bestseller"],
    rating: 4.7,
    reviewsCount: 61,
    inStock: true,
    wristFocus: { x: 50, y: 56, scale: 1.6 },
  },
  {
    id: "hublot-big-bang",
    slug: "hublot-big-bang-skeleton",
    brand: "Hublot",
    name: "Big Bang Skeleton Chronograph",
    collection: "Big Bang",
    category: "Chronograph",
    price: 6999,
    currency: "Rs",
    shortDescription:
      "An all-black skeleton chronograph with exposed movement detailing and a signature ribbed bezel.",
    description:
      "Bold and mechanical, the Big Bang Skeleton exposes its inner architecture through a fully open dial, framed by the brand's signature H-screw ribbed bezel. Twin chronograph sub-dials and a matte black rubber-lined leather strap complete a look built for those who wear their watch like a statement piece.",
    highlights: [
      "Full skeleton open-worked dial",
      "Chronograph sub-dials with date window",
      "Signature ribbed bezel with H-screws",
      "Matte black finish throughout",
    ],
    images: ["/images/products/hublot/1.png", "/images/products/hublot/2.png"],
    variants: [
      { id: "all-black", label: "All Black", colorHex: "#111111", image: "/images/products/hublot/1.png" },
    ],
    specs: {
      movement: "Quartz",
      style: "Chronograph",
      caseMaterial: "Black Ceramic-Coated Steel",
      caseDiameter: "44mm",
      caseThickness: "14mm",
      dialColor: "Black Skeleton",
      strapMaterial: "Rubber-Lined Leather",
      clasp: "Deployant Buckle",
      waterResistance: "3 ATM (Splash Resistant)",
      warranty: "6 Month Machine Warranty",
      gender: "Men",
      origin: "Swiss Design",
      glass: "Mineral Crystal",
    },
    badges: ["Bestseller"],
    rating: 4.8,
    reviewsCount: 145,
    inStock: true,
    wristFocus: { x: 50, y: 46, scale: 1.7 },
  },
  {
    id: "longbo-chrono",
    slug: "longbo-square-chronograph",
    brand: "Longbo",
    name: "Square Chronograph",
    collection: "Longbo Heritage",
    category: "Chronograph",
    price: 3999,
    currency: "Rs",
    shortDescription:
      "A vintage-inspired square chronograph with a tri-compax dial, available in four bold colourways.",
    description:
      "A tribute to 1970s motorsport chronographs, the Longbo Square pairs a cushion case with a tri-compax dial layout and a black tachymeter-style bezel ring. The heavy link bracelet and folding clasp give it real wrist presence, while four dial colourways let you match the mood.",
    highlights: [
      "Vintage tri-compax chronograph dial",
      "Heavy-link stainless steel bracelet",
      "Available in 4 dial colours",
      "Day-date window at 3 o'clock",
    ],
    images: ["/images/products/longbo/1.png", "/images/products/longbo/2.png"],
    variants: [
      { id: "silver", label: "Silver", colorHex: "#c9ccd1", image: "/images/products/longbo/1.png" },
      { id: "blue", label: "Deep Blue", colorHex: "#1c3350", image: "/images/products/longbo/2.png" },
      { id: "green", label: "Racing Green", colorHex: "#1f4d3a", image: "/images/products/longbo/1.png" },
      { id: "gold", label: "Two-Tone Gold", colorHex: "#caa14b", image: "/images/products/longbo/2.png" },
    ],
    specs: {
      movement: "Quartz",
      style: "Chronograph",
      caseMaterial: "Stainless Steel",
      caseDiameter: "40mm",
      caseThickness: "11mm",
      dialColor: "Silver",
      strapMaterial: "Stainless Steel Bracelet",
      clasp: "Folding Clasp",
      waterResistance: "5 ATM (50m)",
      warranty: "6 Month Machine Warranty",
      gender: "Men",
      glass: "Mineral Crystal",
    },
    badges: ["New"],
    rating: 4.5,
    reviewsCount: 47,
    inStock: true,
    wristFocus: { x: 50, y: 32, scale: 1.6 },
  },
  {
    id: "rado-true-square",
    slug: "rado-true-square-automatic",
    brand: "Rado",
    name: "True Square Automatic",
    collection: "True Square",
    category: "Luxury",
    price: 6299,
    currency: "Rs",
    shortDescription:
      "A high-tech ceramic square automatic with crystal hour markers, in Black or Silver.",
    description:
      "Sleek, minimal and unmistakably modern, the True Square wears a monobloc high-tech ceramic case that feels featherlight and scratch-resistant. Crystal hour markers orbit a sunburst dial, while the exhibition case back reveals the automatic calibre inside. Choose deep matte black or brushed silver.",
    highlights: [
      "Monobloc high-tech ceramic case",
      "Automatic movement with exhibition case back",
      "Scratch-resistant ceramic bracelet",
      "Available in Black or Silver",
    ],
    images: ["/images/products/rado/1.png", "/images/products/rado/2.png"],
    variants: [
      { id: "black", label: "Ceramic Black", colorHex: "#161616", image: "/images/products/rado/1.png" },
      { id: "silver", label: "Ceramic Silver", colorHex: "#c9ccd1", image: "/images/products/rado/2.png" },
    ],
    specs: {
      movement: "Automatic",
      style: "Analog",
      caseMaterial: "High-Tech Ceramic",
      caseDiameter: "38mm",
      caseThickness: "10mm",
      dialColor: "Black / Silver",
      strapMaterial: "Ceramic Bracelet",
      clasp: "Folding Clasp",
      waterResistance: "3 ATM (Splash Resistant)",
      warranty: "6 Month Machine Warranty",
      gender: "Unisex",
      origin: "Swiss Design",
      glass: "Sapphire-Coated Mineral",
    },
    badges: ["Bestseller"],
    rating: 4.7,
    reviewsCount: 88,
    inStock: true,
    wristFocus: { x: 27, y: 42, scale: 2.3 },
  },
  {
    id: "success-way-cushion",
    slug: "success-way-cushion-dress",
    brand: "Success Way",
    name: "Cushion Dress Watch",
    collection: "Success Way Heritage",
    category: "Dress",
    price: 2999,
    currency: "Rs",
    shortDescription:
      "A cushion-cased dress watch with a sunburst silver dial and croc-embossed leather strap.",
    description:
      "Understated luxury for everyday wear, the Cushion Dress Watch pairs a softly rounded cushion case with a sunburst silver dial and slim baton markers. A croc-embossed black leather strap adds a tactile, elegant finish that pairs equally well with a suit or smart-casual fit.",
    highlights: [
      "Cushion-shaped polished case",
      "Sunburst silver dial with baton markers",
      "Croc-embossed genuine leather strap",
      "Slim, lightweight everyday build",
    ],
    images: ["/images/products/success-way/1.png", "/images/products/success-way/2.png"],
    variants: [
      { id: "silver-black", label: "Silver & Black", colorHex: "#c9ccd1", image: "/images/products/success-way/1.png" },
    ],
    specs: {
      movement: "Quartz",
      style: "Analog",
      caseMaterial: "Stainless Steel",
      caseDiameter: "40mm",
      caseThickness: "9.5mm",
      dialColor: "Silver",
      strapMaterial: "Croc-Embossed Leather",
      clasp: "Pin Buckle",
      waterResistance: "3 ATM (Splash Resistant)",
      warranty: "6 Month Machine Warranty",
      gender: "Unisex",
      glass: "Mineral Crystal",
    },
    badges: [],
    rating: 4.4,
    reviewsCount: 39,
    inStock: true,
    wristFocus: { x: 62, y: 72, scale: 1.9 },
  },
  {
    id: "tag-heuer-carrera",
    slug: "tag-heuer-carrera-twin-time",
    brand: "TAG Heuer",
    name: "Carrera Twin-Time Automatic",
    collection: "Carrera",
    category: "Sport",
    price: 7499,
    currency: "Rs",
    shortDescription:
      "A motorsport-inspired automatic with a GMT hand and warm cognac leather strap.",
    description:
      "Inspired by the Carrera Panamericana road race, this Twin-Time automatic tracks a second time zone with a striking red GMT hand against a sunburst grey dial. Faceted baton markers, a brushed steel case and a rich cognac leather strap bring together motorsport heritage and everyday refinement.",
    highlights: [
      "Twin-time GMT complication",
      "Automatic self-winding movement",
      "Sunburst grey dial with faceted markers",
      "Genuine cognac leather strap",
    ],
    images: ["/images/products/tag-heuer/1.png", "/images/products/tag-heuer/2.png"],
    variants: [
      { id: "cognac", label: "Cognac Leather", colorHex: "#8a4a2a", image: "/images/products/tag-heuer/1.png" },
    ],
    specs: {
      movement: "Automatic",
      style: "Analog",
      caseMaterial: "Brushed Stainless Steel",
      caseDiameter: "41mm",
      caseThickness: "12.5mm",
      dialColor: "Grey",
      strapMaterial: "Genuine Leather",
      clasp: "Pin Buckle",
      waterResistance: "10 ATM (100m)",
      warranty: "6 Month Machine Warranty",
      gender: "Men",
      origin: "Swiss Design",
      glass: "Sapphire-Coated Mineral",
    },
    badges: ["Limited"],
    rating: 4.9,
    reviewsCount: 76,
    inStock: true,
    wristFocus: { x: 50, y: 42, scale: 1.7 },
  },
];

export function getAllProducts() {
  return products;
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, count = 4) {
  const sameCategory = products.filter(
    (p) => p.id !== product.id && p.category === product.category
  );
  const rest = products.filter(
    (p) => p.id !== product.id && p.category !== product.category
  );
  return [...sameCategory, ...rest].slice(0, count);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.badges.includes("Bestseller"));
}

export function getNewArrivals() {
  return products.filter((p) => p.badges.includes("New"));
}

export function getBestSellers() {
  return products.filter((p) => p.badges.includes("Bestseller"));
}

export const categories = [
  { name: "Dress", label: "Dress Watches", image: "/images/products/cartier/1.png" },
  { name: "Sport", label: "Sport Watches", image: "/images/products/tag-heuer/1.png" },
  { name: "Chronograph", label: "Chronographs", image: "/images/products/hublot/1.png" },
  { name: "Luxury", label: "Luxury Icons", image: "/images/products/rolex/1.png" },
  { name: "Classic", label: "Everyday Classics", image: "/images/products/citizen-classic/1.png" },
] as const;

export const brands = Array.from(new Set(products.map((p) => p.brand)));
