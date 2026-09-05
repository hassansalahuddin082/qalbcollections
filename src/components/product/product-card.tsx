"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, MessageCircle } from "lucide-react";
import { Product } from "@/lib/types";
import { formatPrice, buildProductWhatsAppMessage, whatsappLink } from "@/lib/whatsapp";
import { useStore } from "@/context/store-context";
import { siteConfig } from "@/lib/site-config";

const badgeStyles: Record<string, string> = {
  New: "bg-ink text-cream",
  Bestseller: "bg-maroon text-cream",
  Limited: "bg-gold text-ink",
  Sale: "bg-ink-soft text-cream",
};

export default function ProductCard({ product }: { product: Product }) {
  const { toggleWishlist, isWishlisted } = useStore();
  const wishlisted = isWishlisted(product.id);
  const secondImage = product.images[1] ?? product.images[0];
  const url = `${siteConfig.url}/product/${product.slug}`;

  return (
    <div className="group relative flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white ring-1 ring-line">
        <Link
          href={`/product/${product.slug}`}
          className="absolute inset-0 block"
        >
          <Image
            src={product.images[0]}
            alt={`${product.brand} ${product.name}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover object-center transition-opacity duration-500 group-hover:opacity-0"
          />
          <Image
            src={secondImage}
            alt=""
            aria-hidden
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="scale-105 object-cover object-center opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
          />
        </Link>

        <div className="pointer-events-none absolute left-3 top-3 flex flex-col gap-1.5">
          {product.badges.map((badge) => (
            <span
              key={badge}
              className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${badgeStyles[badge]}`}
            >
              {badge}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          aria-label="Toggle wishlist"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-cream/90 text-ink shadow-sm backdrop-blur transition-transform hover:scale-110"
        >
          <Heart
            className={`h-4 w-4 transition-colors ${wishlisted ? "fill-maroon text-maroon" : ""}`}
          />
        </button>

        <a
          href={whatsappLink(buildProductWhatsAppMessage(product, { url }))}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order on WhatsApp"
          className="absolute bottom-3 right-3 flex translate-y-2 items-center gap-1.5 rounded-full bg-[#25D366] px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <MessageCircle className="h-3.5 w-3.5" fill="white" strokeWidth={0} />
          Order
        </a>
      </div>

      <div className="mt-3 flex flex-col gap-0.5 px-0.5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-maroon">
          {product.brand}
        </p>
        <Link
          href={`/product/${product.slug}`}
          className="line-clamp-1 text-sm font-medium text-ink transition-colors hover:text-maroon sm:text-base"
        >
          {product.name}
        </Link>
        <div className="mt-1 flex items-center gap-2">
          <span className="font-display text-base font-semibold text-ink sm:text-lg">
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice ? (
            <span className="text-xs text-ink/40 line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
