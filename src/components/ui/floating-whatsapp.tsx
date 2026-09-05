"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { whatsappLink } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  const message = `Hello ${siteConfig.name}! I have a question about your watches.`;

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition-all hover:pr-5 sm:bottom-8 sm:right-8"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/60 [animation-duration:2.5s]" />
      <MessageCircle className="h-6 w-6 shrink-0" fill="white" strokeWidth={0} />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[140px]">
        Order on WhatsApp
      </span>
    </a>
  );
}
