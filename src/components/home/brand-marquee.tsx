import { brands } from "@/lib/products";

export default function BrandMarquee() {
  const loop = [...brands, ...brands, ...brands];
  return (
    <section className="border-y border-line bg-cream-soft py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-ink/40">
          Brands We Carry
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-16 whitespace-nowrap [animation-duration:32s]">
          {loop.map((brand, i) => (
            <span
              key={i}
              className="font-display text-2xl font-semibold tracking-wide text-ink/25 transition-colors hover:text-maroon sm:text-3xl"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
