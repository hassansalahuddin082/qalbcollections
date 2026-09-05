"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { useStore } from "@/context/store-context";
import { getAllProducts } from "@/lib/products";
import ProductCard from "@/components/product/product-card";

export default function WishlistPage() {
  const { wishlist } = useStore();
  const products = getAllProducts().filter((p) => wishlist.includes(p.id));

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-semibold sm:text-4xl">Your Wishlist</h1>
      <p className="mt-1 text-sm text-ink/50">{products.length} saved watches</p>

      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
          <Heart className="h-12 w-12 text-ink/20" />
          <p className="text-ink/60">You haven&apos;t saved any watches yet.</p>
          <Link
            href="/shop"
            className="rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-cream transition-transform hover:scale-105"
          >
            Browse Watches
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
