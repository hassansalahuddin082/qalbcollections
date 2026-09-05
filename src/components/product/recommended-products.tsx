import { Product } from "@/lib/types";
import SectionHeading from "@/components/ui/section-heading";
import ProductCarousel from "@/components/home/product-carousel";
import Reveal from "@/components/ui/reveal";

export default function RecommendedProducts({ products }: { products: Product[] }) {
  if (products.length === 0) return null;
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Complete the Look"
          title="You May Also Like"
          description="Similar pieces our customers pair with this watch."
        />
      </Reveal>
      <div className="mt-8">
        <ProductCarousel products={products} />
      </div>
    </section>
  );
}
