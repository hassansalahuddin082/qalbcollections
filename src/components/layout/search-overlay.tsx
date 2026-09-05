"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { products } from "@/lib/products";
import { formatPrice } from "@/lib/whatsapp";

export default function SearchOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- clear the query when the overlay closes
    if (!open) setQuery("");
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.collection.toLowerCase().includes(q)
      )
      .slice(0, 6);
  }, [query]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-ink/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="mx-auto mt-16 w-[92%] max-w-2xl rounded-2xl bg-cream p-5 shadow-2xl sm:mt-24 sm:p-6"
          >
            <div className="flex items-center gap-3 border-b border-line pb-4">
              <Search className="h-5 w-5 text-ink/50" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search watches, brands, collections..."
                className="w-full bg-transparent text-base outline-none placeholder:text-ink/40"
              />
              <button
                onClick={onClose}
                aria-label="Close search"
                className="rounded-full p-1.5 text-ink/60 hover:bg-ink/5"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 max-h-[60vh] space-y-1 overflow-y-auto">
              {query.trim() && results.length === 0 ? (
                <p className="py-8 text-center text-sm text-ink/50">
                  No watches found for “{query}”.
                </p>
              ) : null}
              {results.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.slug}`}
                  onClick={onClose}
                  className="flex items-center gap-4 rounded-xl p-2 transition-colors hover:bg-ink/5"
                >
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-white ring-1 ring-line">
                    <Image src={product.images[0]} alt={product.name} fill sizes="56px" className="object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-maroon">
                      {product.brand}
                    </p>
                    <p className="truncate text-sm font-medium text-ink">{product.name}</p>
                  </div>
                  <span className="text-sm font-semibold text-ink">
                    {formatPrice(product.price)}
                  </span>
                </Link>
              ))}
              {!query.trim() ? (
                <div className="py-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink/40">
                    Popular searches
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Rolex", "Chronograph", "Automatic", "Cartier", "Dress Watch"].map(
                      (term) => (
                        <button
                          key={term}
                          onClick={() => setQuery(term)}
                          className="rounded-full border border-line px-3 py-1.5 text-xs text-ink/70 transition-colors hover:border-maroon hover:text-maroon"
                        >
                          {term}
                        </button>
                      )
                    )}
                  </div>
                </div>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
