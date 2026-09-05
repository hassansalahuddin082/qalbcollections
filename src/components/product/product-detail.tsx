"use client";

import { useState } from "react";
import { Heart, MessageCircle, Minus, Plus, ShoppingBag, Star, Check } from "lucide-react";
import { Product } from "@/lib/types";
import { formatPrice, buildProductWhatsAppMessage, whatsappLink } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site-config";
import { useStore } from "@/context/store-context";
import ProductGallery from "./product-gallery";

export default function ProductDetail({ product }: { product: Product }) {
  const [variantId, setVariantId] = useState(product.variants[0]?.id ?? "");
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);
  const { addToCart, toggleWishlist, isWishlisted } = useStore();

  const variant = product.variants.find((v) => v.id === variantId) ?? product.variants[0];
  const url = `${siteConfig.url}/product/${product.slug}`;
  const wishlisted = isWishlisted(product.id);

  function handleAddToOrder() {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, variant.id, variant.label);
    }
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  }

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
      <ProductGallery product={product} activeImage={variant.image} strapColor={variant.colorHex} />

      <div className="flex flex-col">
        <div className="flex flex-wrap items-center gap-2">
          {product.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full bg-maroon/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-maroon"
            >
              {badge}
            </span>
          ))}
        </div>

        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-maroon">
          {product.brand} · {product.collection}
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
          {product.name}
        </h1>

        <div className="mt-3 flex items-center gap-3">
          <div className="flex items-center gap-0.5 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < Math.round(product.rating) ? "fill-gold" : "fill-none text-ink/20"}`}
              />
            ))}
          </div>
          <span className="text-sm text-ink/50">
            {product.rating} ({product.reviewsCount} reviews)
          </span>
        </div>

        <div className="mt-5 flex items-center gap-3">
          <span className="font-display text-3xl font-bold text-ink">
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice ? (
            <>
              <span className="text-lg text-ink/40 line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
              <span className="rounded-full bg-maroon px-2.5 py-1 text-xs font-semibold text-cream">
                Save {Math.round(100 - (product.price / product.compareAtPrice) * 100)}%
              </span>
            </>
          ) : null}
        </div>
        <p className="mt-1 text-xs text-ink/40">Inclusive of all taxes · Cash on Delivery</p>

        <p className="mt-5 text-sm leading-relaxed text-ink/70">{product.shortDescription}</p>

        {product.variants.length > 1 ? (
          <div className="mt-7">
            <p className="mb-2.5 text-xs font-semibold uppercase tracking-widest text-ink/50">
              Colour: <span className="text-ink">{variant.label}</span>
            </p>
            <div className="flex flex-wrap gap-2.5">
              {product.variants.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setVariantId(v.id)}
                  aria-label={v.label}
                  title={v.label}
                  className={`relative h-9 w-9 rounded-full ring-2 ring-offset-2 ring-offset-cream transition-all ${
                    v.id === variantId ? "ring-maroon" : "ring-transparent hover:ring-line"
                  }`}
                  style={{ backgroundColor: v.colorHex }}
                >
                  {v.id === variantId ? (
                    <Check className="absolute inset-0 m-auto h-4 w-4 text-white mix-blend-difference" />
                  ) : null}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-7 flex items-center gap-4">
          <div className="flex items-center gap-3 rounded-full border border-line px-3 py-2">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              aria-label="Decrease quantity"
              className="rounded-full p-1 hover:bg-ink/5"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-5 text-center text-sm font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              aria-label="Increase quantity"
              className="rounded-full p-1 hover:bg-ink/5"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <button
            onClick={() => toggleWishlist(product.id)}
            aria-label="Toggle wishlist"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-maroon hover:text-maroon"
          >
            <Heart className={`h-5 w-5 ${wishlisted ? "fill-maroon text-maroon" : ""}`} />
          </button>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappLink(buildProductWhatsAppMessage(product, { variantLabel: variant.label, url }))}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="h-4 w-4" fill="white" strokeWidth={0} />
            Order Now on WhatsApp
          </a>
          <button
            onClick={handleAddToOrder}
            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-ink px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            <ShoppingBag className="h-4 w-4" />
            {justAdded ? "Added to Order List" : "Add to Order List"}
          </button>
        </div>

        <ul className="mt-8 space-y-2 border-t border-line pt-6">
          {product.highlights.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-sm text-ink/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
