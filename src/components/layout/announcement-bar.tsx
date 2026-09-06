import { siteConfig } from "@/lib/site-config";

const messages = [
  "Cash on Delivery — Pay When It Arrives",
  "Order Instantly via WhatsApp",
  `Call or WhatsApp: ${siteConfig.phone}`,
  `Email: ${siteConfig.email}`,
  "6 Month Machine Warranty on Every Watch",
  "Free Delivery on Orders Above Rs 5,000",
];

export default function AnnouncementBar() {
  const loop = [...messages, ...messages];
  return (
    <div className="overflow-hidden bg-ink py-2 text-cream">
      <div className="flex w-max animate-marquee gap-16 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.2em]">
        {loop.map((msg, i) => (
          <span key={i} className="flex items-center gap-16">
            {msg}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
