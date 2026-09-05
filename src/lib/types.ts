export type Movement = "Automatic" | "Quartz";
export type WatchStyle = "Analog" | "Chronograph";
export type Gender = "Men" | "Women" | "Unisex";
export type Category =
  | "Dress"
  | "Sport"
  | "Chronograph"
  | "Luxury"
  | "Classic";

export interface Variant {
  id: string;
  label: string;
  colorHex: string;
  image: string;
}

export interface Specs {
  movement: Movement;
  style: WatchStyle;
  caseMaterial: string;
  caseDiameter: string;
  caseThickness?: string;
  dialColor: string;
  strapMaterial: string;
  clasp?: string;
  waterResistance: string;
  warranty: string;
  gender: Gender;
  origin?: string;
  glass?: string;
}

export interface Product {
  id: string;
  slug: string;
  brand: string;
  name: string;
  collection: string;
  category: Category;
  price: number;
  compareAtPrice?: number;
  currency: "Rs";
  shortDescription: string;
  description: string;
  highlights: string[];
  images: string[];
  variants: Variant[];
  specs: Specs;
  badges: ("New" | "Bestseller" | "Limited" | "Sale")[];
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  /** Approximate focal point of the watch face within the primary image, used for the wrist-view visualizer. */
  wristFocus?: { x: number; y: number; scale: number };
}
