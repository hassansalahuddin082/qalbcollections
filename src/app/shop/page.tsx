import { Suspense } from "react";
import type { Metadata } from "next";
import ShopClient from "@/components/shop/shop-client";
import { getAllProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop All Watches",
  description:
    "Browse our full collection of automatic, quartz and chronograph watches. Order via WhatsApp with Cash on Delivery.",
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  const products = getAllProducts();
  return (
    <Suspense>
      <ShopClient products={products} />
    </Suspense>
  );
}
