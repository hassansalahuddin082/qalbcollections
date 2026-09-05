"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck, Truck, Watch } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(201,163,74,0.18),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(100,21,36,0.55),transparent_50%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23ffffff'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-14 pt-10 sm:px-6 sm:pt-16 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pb-24 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 lg:order-1"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
            <Watch className="h-3.5 w-3.5" />
            New Season Collection
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
            Wear a <span className="shimmer-text italic">Statement</span>,
            <br /> Not Just a Watch
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-cream/70 sm:text-lg">
            Handpicked automatic, chronograph and dress timepieces from the
            world&apos;s most iconic houses — curated for elegance, priced for
            you. Order in a tap, pay only when it arrives.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/shop"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_10px_30px_rgba(201,163,74,0.35)] transition-transform hover:scale-105"
            >
              Explore Collection
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={whatsappLink(`Hello ${siteConfig.name}! I'd like to explore your watch collection.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-gold hover:text-gold"
            >
              <MessageCircle className="h-4 w-4" />
              Order on WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-cream/10 pt-6">
            <div className="flex items-center gap-2.5 text-sm text-cream/70">
              <Truck className="h-5 w-5 text-gold" />
              Cash on Delivery
            </div>
            <div className="flex items-center gap-2.5 text-sm text-cream/70">
              <ShieldCheck className="h-5 w-5 text-gold" />
              6-Month Warranty
            </div>
            <div className="flex items-center gap-2.5 text-sm text-cream/70">
              <MessageCircle className="h-5 w-5 text-gold" />
              Order via WhatsApp
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative aspect-square w-full max-w-md">
            <div className="absolute inset-8 rounded-full border border-gold/20" />
            <div className="absolute inset-16 rounded-full border border-gold/10" />
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-full w-full"
            >
              <Image
                src="/images/products/rolex/1.png"
                alt="Featured luxury watch"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 480px"
                className="object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.55)]"
              />
            </motion.div>
            <div className="absolute -bottom-4 left-1/2 h-8 w-2/3 -translate-x-1/2 rounded-full bg-black/40 blur-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
