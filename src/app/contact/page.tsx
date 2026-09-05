import type { Metadata } from "next";
import { MessageCircle, MapPin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { whatsappLink } from "@/lib/whatsapp";
import Reveal from "@/components/ui/reveal";
import { InstagramIcon, FacebookIcon } from "@/components/ui/social-icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.name} on WhatsApp for orders, sizing help or general questions.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-maroon">
          We&apos;d Love to Hear From You
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold text-ink sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-ink/60">
          Questions about sizing, delivery times or a specific watch? Message
          us on WhatsApp — it&apos;s the fastest way to reach our team.
        </p>

        <a
          href={whatsappLink(`Hello ${siteConfig.name}! I have a question.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
        >
          <MessageCircle className="h-5 w-5" fill="white" strokeWidth={0} />
          Chat on WhatsApp
        </a>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="rounded-2xl border border-line bg-white/60 p-6">
            <MapPin className="mx-auto h-5 w-5 text-maroon" />
            <p className="mt-3 text-sm font-semibold text-ink">Location</p>
            <p className="mt-1 text-sm text-ink/60">{siteConfig.address}</p>
          </div>
          <div className="rounded-2xl border border-line bg-white/60 p-6">
            <Mail className="mx-auto h-5 w-5 text-maroon" />
            <p className="mt-3 text-sm font-semibold text-ink">Email</p>
            <p className="mt-1 text-sm text-ink/60">{siteConfig.email}</p>
          </div>
          <div className="rounded-2xl border border-line bg-white/60 p-6">
            <InstagramIcon className="mx-auto h-5 w-5 text-maroon" />
            <p className="mt-3 text-sm font-semibold text-ink">Follow Us</p>
            <div className="mt-2 flex items-center justify-center gap-3">
              <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-ink/50 hover:text-maroon">
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-ink/50 hover:text-maroon">
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
