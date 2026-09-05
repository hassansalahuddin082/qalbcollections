"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, Trash2, X, MessageCircle, ShoppingBag } from "lucide-react";
import { useStore } from "@/context/store-context";
import { getAllProducts } from "@/lib/products";
import { formatPrice, buildCartWhatsAppMessage, whatsappLink, OrderLine } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site-config";

export default function CartDrawer() {
  const { cart, isCartOpen, setCartOpen, removeFromCart, updateQuantity, clearCart } = useStore();
  const products = getAllProducts();

  const lines: OrderLine[] = cart
    .map((item) => {
      const product = products.find((p) => p.id === item.productId);
      if (!product) return null;
      return { product, variantLabel: item.variantLabel, quantity: item.quantity };
    })
    .filter((l): l is OrderLine => l !== null);

  const total = lines.reduce((sum, l) => sum + l.product.price * l.quantity, 0);

  return (
    <AnimatePresence>
      {isCartOpen ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-ink/50 backdrop-blur-sm"
            onClick={() => setCartOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-y-0 right-0 z-[80] flex w-full max-w-md flex-col bg-cream shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <h2 className="font-display text-lg font-semibold">
                Your Order List ({lines.length})
              </h2>
              <button
                onClick={() => setCartOpen(false)}
                aria-label="Close"
                className="rounded-full p-2 hover:bg-ink/5"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {lines.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
                <ShoppingBag className="h-10 w-10 text-ink/20" />
                <p className="text-sm text-ink/60">
                  Your order list is empty. Add a watch to order it via WhatsApp.
                </p>
              </div>
            ) : (
              <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
                {lines.map((line) => (
                  <div
                    key={`${line.product.id}-${line.variantLabel}`}
                    className="flex gap-3 border-b border-line pb-4"
                  >
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-white ring-1 ring-line">
                      <Image
                        src={line.product.images[0]}
                        alt={line.product.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-maroon">
                        {line.product.brand}
                      </p>
                      <p className="text-sm font-medium leading-snug">{line.product.name}</p>
                      <p className="text-xs text-ink/50">{line.variantLabel}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center gap-2 rounded-full border border-line px-1.5 py-1">
                          <button
                            onClick={() =>
                              updateQuantity(
                                line.product.id,
                                cart.find((c) => c.productId === line.product.id)?.variantId ?? "",
                                line.quantity - 1
                              )
                            }
                            className="rounded-full p-1 hover:bg-ink/5"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-4 text-center text-xs font-medium">{line.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                line.product.id,
                                cart.find((c) => c.productId === line.product.id)?.variantId ?? "",
                                line.quantity + 1
                              )
                            }
                            className="rounded-full p-1 hover:bg-ink/5"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="text-sm font-semibold">
                          {formatPrice(line.product.price * line.quantity)}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        removeFromCart(
                          line.product.id,
                          cart.find((c) => c.productId === line.product.id)?.variantId ?? ""
                        )
                      }
                      aria-label="Remove"
                      className="h-fit rounded-full p-1.5 text-ink/40 hover:bg-ink/5 hover:text-maroon"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {lines.length > 0 ? (
              <div className="space-y-3 border-t border-line px-5 py-5">
                <div className="flex items-center justify-between text-base font-semibold">
                  <span>Total (COD)</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <a
                  href={whatsappLink(buildCartWhatsAppMessage(lines, siteConfig.url))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="h-4 w-4" fill="white" strokeWidth={0} />
                  Complete Order on WhatsApp
                </a>
                <button
                  onClick={clearCart}
                  className="w-full text-center text-xs font-medium text-ink/40 hover:text-maroon"
                >
                  Clear order list
                </button>
              </div>
            ) : null}
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
