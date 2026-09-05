import Hero from "@/components/home/hero";
import CategoryGrid from "@/components/home/category-grid";
import BrandMarquee from "@/components/home/brand-marquee";
import ProductCarousel from "@/components/home/product-carousel";
import PromoBanner from "@/components/home/promo-banner";
import TrustBadges from "@/components/home/trust-badges";
import CtaSection from "@/components/home/cta-section";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import {
  getFeaturedProducts,
  getNewArrivals,
  getBestSellers,
  getAllProducts,
} from "@/lib/products";

export default function Home() {
  const featured = getFeaturedProducts();
  const newArrivals = getNewArrivals();
  const bestSellers = getBestSellers();
  const all = getAllProducts();

  return (
    <>
      <Hero />
      <TrustBadges />
      <CategoryGrid />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Handpicked for You"
            title="Featured Watches"
            description="A rotating edit of our most coveted timepieces, chosen for craftsmanship and character."
            href="/shop?sort=bestseller"
          />
        </Reveal>
        <div className="mt-10">
          <ProductCarousel products={featured} />
        </div>
      </section>

      <PromoBanner />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Just Landed"
            title="New Arrivals"
            description="The latest additions to the QALB Collections lineup."
            href="/shop?sort=new"
          />
        </Reveal>
        <div className="mt-10">
          <ProductCarousel products={newArrivals.length ? newArrivals : all} />
        </div>
      </section>

      <BrandMarquee />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Customer Favourites"
            title="Best Sellers"
            description="The watches our customers keep coming back for."
            href="/shop?sort=bestseller"
          />
        </Reveal>
        <div className="mt-10">
          <ProductCarousel products={bestSellers} />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
