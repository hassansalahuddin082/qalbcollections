import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/products";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Curated Selection"
          title="Shop by Category"
          description="From boardroom-ready dress watches to motorsport chronographs — find the piece that matches your moment."
        />
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-5">
        {categories.map((category, i) => (
          <Reveal key={category.name} delay={i * 0.06}>
            <Link
              href={`/shop?category=${category.name}`}
              className="group relative block aspect-[3/4] overflow-hidden rounded-2xl bg-ink"
            >
              <Image
                src={category.image}
                alt={category.label}
                fill
                sizes="(max-width: 640px) 50vw, 20vw"
                className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-display text-base font-semibold text-cream sm:text-lg">
                  {category.label}
                </p>
                <span className="mt-1 inline-block h-0.5 w-8 bg-gold transition-all duration-300 group-hover:w-14" />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
