import { Truck, ShieldCheck, MessageCircle, RefreshCcw } from "lucide-react";
import Reveal from "@/components/ui/reveal";

const badges = [
  {
    icon: MessageCircle,
    title: "Order via WhatsApp",
    description: "No forms, no hassle — order in one message.",
  },
  {
    icon: Truck,
    title: "Cash on Delivery",
    description: "Pay only when your watch arrives at your door.",
  },
  {
    icon: ShieldCheck,
    title: "6-Month Warranty",
    description: "Every piece is backed by our machine warranty.",
  },
  {
    icon: RefreshCcw,
    title: "Easy Exchange",
    description: "Wrong size or style? We'll make it right.",
  },
];

export default function TrustBadges() {
  return (
    <section className="border-y border-line bg-cream-soft">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        {badges.map((badge, i) => (
          <Reveal key={badge.title} delay={i * 0.06} className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-maroon/10 text-maroon">
              <badge.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">{badge.title}</p>
              <p className="text-xs text-ink/50">{badge.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
