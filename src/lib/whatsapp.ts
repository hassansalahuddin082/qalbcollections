import { siteConfig } from "./site-config";
import { Product } from "./types";

export function formatPrice(amount: number) {
  return `${siteConfig.currencySymbol} ${amount.toLocaleString("en-PK")}`;
}

export function buildProductWhatsAppMessage(
  product: Product,
  opts?: { variantLabel?: string; url?: string }
) {
  const lines = [
    `Hello ${siteConfig.name}! I'd like to order:`,
    ``,
    `*${product.brand} — ${product.name}*`,
    opts?.variantLabel ? `Colour/Variant: ${opts.variantLabel}` : undefined,
    `Price: ${formatPrice(product.price)} (Cash on Delivery)`,
    opts?.url ? `Product Link: ${opts.url}` : undefined,
    ``,
    `My Name:`,
    `Delivery Address:`,
    `Phone Number:`,
  ].filter(Boolean);
  return lines.join("\n");
}

export interface OrderLine {
  product: Product;
  variantLabel: string;
  quantity: number;
}

export function buildCartWhatsAppMessage(lines: OrderLine[], baseUrl?: string) {
  const total = lines.reduce((sum, l) => sum + l.product.price * l.quantity, 0);
  const body = [
    `Hello ${siteConfig.name}! I'd like to place an order for:`,
    ``,
    ...lines.map(
      (l, i) =>
        `${i + 1}. ${l.product.brand} ${l.product.name} (${l.variantLabel}) x${l.quantity} — ${formatPrice(
          l.product.price * l.quantity
        )}${baseUrl ? `\n   ${baseUrl}/product/${l.product.slug}` : ""}`
    ),
    ``,
    `*Total: ${formatPrice(total)}* (Cash on Delivery)`,
    ``,
    `My Name:`,
    `Delivery Address:`,
    `Phone Number:`,
  ];
  return body.join("\n");
}

export function whatsappLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
