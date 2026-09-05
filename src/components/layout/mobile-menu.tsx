"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import { categories } from "@/lib/products";
import { whatsappLink } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site-config";

const links = [
  { href: "/shop", label: "Shop All" },
  { href: "/shop?sort=new", label: "New Arrivals" },
  { href: "/shop?sort=bestseller", label: "Best Sellers" },
  { href: "/wishlist", label: "Wishlist" },
];

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-ink/50 backdrop-blur-sm md:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-y-0 left-0 z-[80] flex w-[85%] max-w-sm flex-col bg-cream p-6 shadow-2xl md:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-xl font-semibold text-maroon">
                {siteConfig.shortName}
              </span>
              <button onClick={onClose} aria-label="Close menu" className="rounded-full p-2 hover:bg-ink/5">
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-10 flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="border-b border-line py-3.5 font-display text-lg text-ink transition-colors hover:text-maroon"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink/40">
                Shop by Category
              </p>
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <Link
                    key={c.name}
                    href={`/shop?category=${c.name}`}
                    onClick={onClose}
                    className="rounded-full border border-line px-3 py-1.5 text-xs text-ink/70 hover:border-maroon hover:text-maroon"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>

            <a
              href={whatsappLink(`Hello ${siteConfig.name}! I'd like to know more about your watches.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-sm font-semibold text-white shadow-lg"
            >
              <MessageCircle className="h-4 w-4" fill="white" strokeWidth={0} />
              Chat on WhatsApp
            </a>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
