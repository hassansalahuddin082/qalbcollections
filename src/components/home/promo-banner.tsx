import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/reveal";

export default function PromoBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Reveal>
          <Link
            href="/shop?category=Chronograph"
            className="group relative block h-72 overflow-hidden rounded-3xl bg-ink sm:h-96"
          >
            <Image
              src="/images/products/hublot/2.png"
              alt="Chronograph collection"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                For the Bold
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-cream sm:text-3xl">
                Chronograph Edit
              </h3>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cream/90">
                Shop Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <Link
            href="/shop?category=Dress"
            className="group relative block h-72 overflow-hidden rounded-3xl bg-maroon sm:h-96"
          >
            <Image
              src="/images/products/cartier/2.png"
              alt="Dress watch collection"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/90 via-maroon-dark/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
                Timeless Refinement
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-cream sm:text-3xl">
                Dress Watch Edit
              </h3>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cream/90">
                Shop Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
