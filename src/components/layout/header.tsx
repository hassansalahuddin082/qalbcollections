"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Search, Heart, ShoppingBag } from "lucide-react";
import AnnouncementBar from "./announcement-bar";
import MobileMenu from "./mobile-menu";
import SearchOverlay from "./search-overlay";
import { categories } from "@/lib/products";
import { useStore } from "@/context/store-context";

const navLinks = [
  { href: "/shop", label: "Shop All" },
  { href: "/shop?sort=new", label: "New Arrivals" },
  { href: "/shop?sort=bestseller", label: "Best Sellers" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { wishlist, cartCount, setCartOpen } = useStore();

  return (
    <header className="sticky top-0 z-50">
      <AnnouncementBar />
      <div className="border-b border-line bg-cream/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="rounded-full p-2 text-ink hover:bg-ink/5"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-line">
              <Image src="/images/logo/qalb-logo.jpg" alt="QALB Collections" fill sizes="44px" className="object-cover" />
            </div>
            <div className="hidden flex-col leading-none sm:flex">
              <span className="font-display text-xl font-bold tracking-wide text-maroon">QALB</span>
              <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-ink/60">
                Collections
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink/80 transition-colors hover:text-maroon"
              >
                {link.label}
              </Link>
            ))}
            <div className="group relative">
              <button className="text-sm font-medium text-ink/80 transition-colors hover:text-maroon">
                Categories
              </button>
              <div className="invisible absolute left-1/2 top-full z-10 w-56 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="rounded-xl border border-line bg-cream p-2 shadow-xl">
                  {categories.map((c) => (
                    <Link
                      key={c.name}
                      href={`/shop?category=${c.name}`}
                      className="block rounded-lg px-3 py-2 text-sm text-ink/80 hover:bg-ink/5 hover:text-maroon"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="rounded-full p-2.5 text-ink hover:bg-ink/5"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="relative rounded-full p-2.5 text-ink hover:bg-ink/5"
            >
              <Heart className="h-5 w-5" />
              {wishlist.length > 0 ? (
                <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-maroon text-[9px] font-bold text-cream">
                  {wishlist.length}
                </span>
              ) : null}
            </Link>
            <button
              onClick={() => setCartOpen(true)}
              aria-label="Order list"
              className="relative rounded-full p-2.5 text-ink hover:bg-ink/5"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 ? (
                <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-maroon text-[9px] font-bold text-cream">
                  {cartCount}
                </span>
              ) : null}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
