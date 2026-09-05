import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site-config";
import Reveal from "@/components/ui/reveal";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-cream">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,163,74,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Ready When You Are
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Found the One? Order It in Seconds.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/70">
            Message us the watch you love, confirm your address, and we&apos;ll
            deliver it to your door — pay only when it arrives.
          </p>
          <a
            href={whatsappLink(`Hello ${siteConfig.name}! I'd like to place an order.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition-transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" fill="white" strokeWidth={0} />
            Chat with Us on WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
