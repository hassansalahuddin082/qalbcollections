import { Product } from "@/lib/types";
import {
  Cog,
  Gem,
  Ruler,
  Droplets,
  ShieldCheck,
  Users,
  Link2,
  CircleDot,
  Watch,
} from "lucide-react";

export default function ProductSpecs({ product }: { product: Product }) {
  const { specs } = product;
  const rows = [
    { icon: Cog, label: "Movement", value: specs.movement },
    { icon: Watch, label: "Style", value: specs.style },
    { icon: Gem, label: "Case Material", value: specs.caseMaterial },
    { icon: Ruler, label: "Case Diameter", value: specs.caseDiameter },
    specs.caseThickness ? { icon: Ruler, label: "Case Thickness", value: specs.caseThickness } : null,
    { icon: CircleDot, label: "Dial Colour", value: specs.dialColor },
    { icon: Link2, label: "Strap Material", value: specs.strapMaterial },
    specs.clasp ? { icon: Link2, label: "Clasp", value: specs.clasp } : null,
    { icon: Droplets, label: "Water Resistance", value: specs.waterResistance },
    { icon: ShieldCheck, label: "Warranty", value: specs.warranty },
    { icon: Users, label: "Gender", value: specs.gender },
    specs.glass ? { icon: Gem, label: "Glass", value: specs.glass } : null,
  ].filter(Boolean) as { icon: typeof Cog; label: string; value: string }[];

  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-0 sm:grid-cols-2">
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex items-center justify-between gap-4 border-b border-line py-4 last:border-b-0"
        >
          <span className="flex items-center gap-2.5 text-sm text-ink/60">
            <row.icon className="h-4 w-4 text-maroon" />
            {row.label}
          </span>
          <span className="text-sm font-semibold text-ink">{row.value}</span>
        </div>
      ))}
    </div>
  );
}
