import Link from "next/link";
import Image from "next/image";
import { MessageCircle, MapPin, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { categories } from "@/lib/products";
import { whatsappLink } from "@/lib/whatsapp";
import { InstagramIcon, FacebookIcon } from "@/components/ui/social-icons";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-cream/20">
                <Image src="/images/logo/qalb-logo.jpg" alt="QALB Collections" fill sizes="44px" className="object-cover" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl font-bold text-gold">QALB</span>
                <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-cream/60">
                  Collections
                </span>
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              {siteConfig.description}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-cream/15 p-2 transition-colors hover:border-gold hover:text-gold"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full border border-cream/15 p-2 transition-colors hover:border-gold hover:text-gold"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={whatsappLink(`Hello ${siteConfig.name}!`)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="rounded-full border border-cream/15 p-2 transition-colors hover:border-gold hover:text-gold"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-cream/40">Shop</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {categories.map((c) => (
                <li key={c.name}>
                  <Link href={`/shop?category=${c.name}`} className="text-cream/70 hover:text-gold">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-cream/40">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/shop" className="text-cream/70 hover:text-gold">All Watches</Link>
              </li>
              <li>
                <Link href="/wishlist" className="text-cream/70 hover:text-gold">Wishlist</Link>
              </li>
              <li>
                <Link href="/about" className="text-cream/70 hover:text-gold">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-cream/70 hover:text-gold">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-cream/40">Get in Touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-cream/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {siteConfig.address}
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-gold">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-gold">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href={whatsappLink(`Hello ${siteConfig.name}!`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  Order &amp; support on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-6 text-xs text-cream/40 sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Cash on Delivery · Ordered on WhatsApp</p>
        </div>
      </div>
    </footer>
  );
}
