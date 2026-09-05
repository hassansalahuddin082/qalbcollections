import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Truck, MessageCircle, Gem } from "lucide-react";
import Reveal from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} — a curated watch house delivering premium timepieces with Cash on Delivery, ordered on WhatsApp.`,
  alternates: { canonical: "/about" },
};

const pillars = [
  {
    icon: Gem,
    title: "Curated, Not Mass-Produced",
    description:
      "Every watch in our catalogue is hand-selected for design, build quality and everyday wearability.",
  },
  {
    icon: MessageCircle,
    title: "Human, Not a Checkout Form",
    description:
      "Order directly through WhatsApp and talk to a real person about sizing, colours and delivery.",
  },
  {
    icon: Truck,
    title: "Cash on Delivery, Always",
    description:
      "No online payments required. Inspect your watch at your doorstep before you pay.",
  },
  {
    icon: ShieldCheck,
    title: "Backed by Warranty",
    description:
      "Every timepiece ships with a 6-month machine warranty for complete peace of mind.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-ink py-20 text-cream">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,163,74,0.15),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Our Story
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
              Timeless Pieces, <span className="shimmer-text italic">Honest</span> Service
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-cream/70">
              {siteConfig.name} was founded on a simple idea — luxury watch
              styling shouldn&apos;t require a showroom visit or a leap of faith
              online. We bring the fitting room to your WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-white ring-1 ring-line">
              <Image
                src="/images/products/tag-heuer/2.png"
                alt="Craftsmanship detail"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-maroon">
              Why QALB Collections
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Built Around Trust, Not Just Transactions
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/70 sm:text-base">
              We know buying a watch online can feel risky — that&apos;s why we
              removed the risk. Browse freely, ask us anything on WhatsApp, and
              pay only once your watch is in your hands. It&apos;s the fitting
              room experience, reimagined for how people actually shop today.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-line bg-white/60 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-maroon/10 text-maroon">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
