"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Expand, X, ChevronLeft, ChevronRight, Watch as WatchIcon, Images } from "lucide-react";
import { Product } from "@/lib/types";
import WristView from "./wrist-view";

export default function ProductGallery({
  product,
  activeImage,
  strapColor,
}: {
  product: Product;
  activeImage: string;
  strapColor: string;
}) {
  const images = product.images;
  const [activeIndex, setActiveIndex] = useState(() =>
    Math.max(0, images.indexOf(activeImage))
  );
  const [mode, setMode] = useState<"gallery" | "wrist">("gallery");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zoomVisible, setZoomVisible] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  const currentImage = images[activeIndex] ?? images[0];

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x: Math.min(100, Math.max(0, x)), y: Math.min(100, Math.max(0, y)) });
  }

  function goTo(delta: number) {
    setActiveIndex((i) => (i + delta + images.length) % images.length);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <button
          onClick={() => setMode("gallery")}
          className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
            mode === "gallery" ? "bg-ink text-cream" : "bg-white text-ink/60 ring-1 ring-line"
          }`}
        >
          <Images className="h-3.5 w-3.5" />
          Product Photos
        </button>
        <button
          onClick={() => setMode("wrist")}
          className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
            mode === "wrist" ? "bg-ink text-cream" : "bg-white text-ink/60 ring-1 ring-line"
          }`}
        >
          <WatchIcon className="h-3.5 w-3.5" />
          Wear It
        </button>
      </div>

      {mode === "gallery" ? (
        <>
          <div
            ref={containerRef}
            onMouseEnter={() => setZoomVisible(true)}
            onMouseLeave={() => setZoomVisible(false)}
            onMouseMove={handleMouseMove}
            className="group relative aspect-square w-full cursor-zoom-in overflow-hidden rounded-2xl bg-white ring-1 ring-line"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={currentImage}
                  alt={`${product.brand} ${product.name}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {zoomVisible ? (
              <div
                className="pointer-events-none absolute inset-0 hidden sm:block"
                style={{
                  backgroundImage: `url(${currentImage})`,
                  backgroundSize: "220%",
                  backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                  backgroundRepeat: "no-repeat",
                }}
              />
            ) : null}

            {images.length > 1 ? (
              <>
                <button
                  onClick={() => goTo(-1)}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-ink opacity-0 shadow transition-opacity group-hover:opacity-100"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => goTo(1)}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-ink opacity-0 shadow transition-opacity group-hover:opacity-100"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            ) : null}

            <button
              onClick={() => setLightboxOpen(true)}
              aria-label="Fullscreen view"
              className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-cream/90 text-ink shadow transition-transform hover:scale-110"
            >
              <Expand className="h-4 w-4" />
            </button>
          </div>

          {images.length > 1 ? (
            <div className="flex gap-3 overflow-x-auto no-scrollbar">
              {images.map((img, i) => (
                <button
                  key={img + i}
                  onClick={() => setActiveIndex(i)}
                  className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-white ring-2 transition-all ${
                    i === activeIndex ? "ring-maroon" : "ring-line hover:ring-ink/30"
                  }`}
                >
                  <Image src={img} alt="" fill sizes="80px" className="object-cover" />
                </button>
              ))}
            </div>
          ) : null}
        </>
      ) : (
        <WristView product={product} image={currentImage} strapColor={strapColor} />
      )}

      <AnimatePresence>
        {lightboxOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              aria-label="Close"
              className="absolute right-5 top-5 rounded-full bg-cream/10 p-2 text-cream hover:bg-cream/20"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="relative h-full max-h-[85vh] w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
              <Image
                src={currentImage}
                alt={`${product.brand} ${product.name}`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            {images.length > 1 ? (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goTo(-1);
                  }}
                  aria-label="Previous"
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-cream/10 p-2 text-cream hover:bg-cream/20"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goTo(1);
                  }}
                  aria-label="Next"
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-cream/10 p-2 text-cream hover:bg-cream/20"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            ) : null}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
