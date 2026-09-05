"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SlidersHorizontal, X } from "lucide-react";
import { Product } from "@/lib/types";
import { categories, brands } from "@/lib/products";
import ProductCard from "@/components/product/product-card";

const movements = ["Automatic", "Quartz"] as const;
const genders = ["Men", "Women", "Unisex"] as const;
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "new", label: "Newest" },
  { value: "bestseller", label: "Best Selling" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

export default function ShopClient({ products }: { products: Product[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);

  const category = searchParams.get("category") ?? "";
  const brand = searchParams.get("brand") ?? "";
  const movement = searchParams.get("movement") ?? "";
  const gender = searchParams.get("gender") ?? "";
  const sort = searchParams.get("sort") ?? "featured";

  function updateParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    router.push(`/shop?${params.toString()}`, { scroll: false });
  }

  function clearFilters() {
    router.push("/shop", { scroll: false });
  }

  const filtered = useMemo(() => {
    let list = [...products];
    if (category) list = list.filter((p) => p.category === category);
    if (brand) list = list.filter((p) => p.brand === brand);
    if (movement) list = list.filter((p) => p.specs.movement === movement);
    if (gender) list = list.filter((p) => p.specs.gender === gender);

    switch (sort) {
      case "new":
        list = list.filter((p) => p.badges.includes("New")).concat(
          list.filter((p) => !p.badges.includes("New"))
        );
        break;
      case "bestseller":
        list = list.filter((p) => p.badges.includes("Bestseller")).concat(
          list.filter((p) => !p.badges.includes("Bestseller"))
        );
        break;
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    return list;
  }, [products, category, brand, movement, gender, sort]);

  const activeFilterCount = [category, brand, movement, gender].filter(Boolean).length;

  const filterPanel = (
    <div className="space-y-7">
      <div>
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink/40">
          Category
        </h3>
        <div className="space-y-2">
          {categories.map((c) => (
            <button
              key={c.name}
              onClick={() => updateParam("category", category === c.name ? "" : c.name)}
              className={`block w-full rounded-lg px-2.5 py-1.5 text-left text-sm transition-colors ${
                category === c.name
                  ? "bg-maroon text-cream"
                  : "text-ink/70 hover:bg-ink/5"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink/40">
          Brand
        </h3>
        <div className="space-y-2">
          {brands.map((b) => (
            <button
              key={b}
              onClick={() => updateParam("brand", brand === b ? "" : b)}
              className={`block w-full rounded-lg px-2.5 py-1.5 text-left text-sm transition-colors ${
                brand === b ? "bg-maroon text-cream" : "text-ink/70 hover:bg-ink/5"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink/40">
          Movement
        </h3>
        <div className="flex flex-wrap gap-2">
          {movements.map((m) => (
            <button
              key={m}
              onClick={() => updateParam("movement", movement === m ? "" : m)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                movement === m
                  ? "border-maroon bg-maroon text-cream"
                  : "border-line text-ink/70 hover:border-maroon hover:text-maroon"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink/40">
          Gender
        </h3>
        <div className="flex flex-wrap gap-2">
          {genders.map((g) => (
            <button
              key={g}
              onClick={() => updateParam("gender", gender === g ? "" : g)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                gender === g
                  ? "border-maroon bg-maroon text-cream"
                  : "border-line text-ink/70 hover:border-maroon hover:text-maroon"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {activeFilterCount > 0 ? (
        <button
          onClick={clearFilters}
          className="text-xs font-semibold text-maroon underline underline-offset-2"
        >
          Clear all filters
        </button>
      ) : null}
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-semibold sm:text-4xl">All Watches</h1>
          <p className="mt-1 text-sm text-ink/50">{filtered.length} pieces found</p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 border-y border-line py-3">
        <button
          onClick={() => setFiltersOpen(true)}
          className="flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium lg:hidden"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters {activeFilterCount > 0 ? `(${activeFilterCount})` : ""}
        </button>
        <div className="hidden text-sm text-ink/50 lg:block">
          Refine your search using the filters
        </div>
        <select
          value={sort}
          onChange={(e) => updateParam("sort", e.target.value)}
          className="rounded-full border border-line bg-cream px-4 py-2 text-sm font-medium outline-none"
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              Sort: {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:block">{filterPanel}</aside>

        {filtersOpen ? (
          <div className="fixed inset-0 z-[90] lg:hidden">
            <div className="absolute inset-0 bg-ink/50" onClick={() => setFiltersOpen(false)} />
            <div className="absolute inset-y-0 left-0 w-[85%] max-w-xs overflow-y-auto bg-cream p-6 shadow-2xl">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="font-display text-lg font-semibold">Filters</h2>
                <button onClick={() => setFiltersOpen(false)} className="rounded-full p-2 hover:bg-ink/5">
                  <X className="h-5 w-5" />
                </button>
              </div>
              {filterPanel}
            </div>
          </div>
        ) : null}

        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
            <p className="font-display text-xl text-ink/60">No watches match your filters.</p>
            <button onClick={clearFilters} className="text-sm font-semibold text-maroon underline">
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
