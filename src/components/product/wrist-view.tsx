"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { Product } from "@/lib/types";

export default function WristView({
  product,
  image,
  strapColor,
}: {
  product: Product;
  image: string;
  strapColor: string;
}) {
  const [wristSize, setWristSize] = useState(165);
  const focus = product.wristFocus ?? { x: 50, y: 50, scale: 1.7 };
  // smaller wrist -> watch appears relatively larger, and vice versa
  const dynamicScale = focus.scale * (175 / wristSize);

  return (
    <div className="flex flex-col gap-5">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-[#e8c9a3] to-[#d9ab7c]">
        <svg
          viewBox="0 0 400 500"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="skin" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e9cba4" />
              <stop offset="100%" stopColor="#cf9c6c" />
            </linearGradient>
            <linearGradient id="skinShadow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(0,0,0,0)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.18)" />
            </linearGradient>
          </defs>
          <path
            d="M40 500 L60 260 Q80 120 200 90 Q320 120 340 260 L360 500 Z"
            fill="url(#skin)"
          />
          <path d="M40 500 L60 260 Q80 120 200 90 Q320 120 340 260 L360 500 Z" fill="url(#skinShadow)" />
          <path
            d="M120 280 Q200 240 280 280 L280 340 Q200 300 120 340 Z"
            fill="rgba(0,0,0,0.08)"
          />
        </svg>

        <motion.div
          key={wristSize}
          initial={{ opacity: 0.6, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
          className="absolute left-1/2 top-[42%] w-[70%] -translate-x-1/2 -translate-y-1/2"
        >
          <div
            className="absolute left-1/2 top-1/2 h-[130%] w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-[999px] shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
            style={{ backgroundColor: strapColor }}
          />
          <div className="relative aspect-square w-full overflow-hidden rounded-full ring-4 ring-black/10 shadow-[0_18px_35px_rgba(0,0,0,0.45)]">
            <Image
              src={image}
              alt={`${product.name} on wrist`}
              fill
              sizes="320px"
              className="object-cover"
              style={{
                objectPosition: `${focus.x}% ${focus.y}%`,
                transform: `scale(${dynamicScale})`,
              }}
            />
          </div>
        </motion.div>

        <div className="absolute bottom-4 left-4 rounded-full bg-ink/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-cream backdrop-blur">
          Wrist Preview
        </div>
      </div>

      <div className="flex items-center gap-4 rounded-xl border border-line bg-white/60 px-4 py-3">
        <button
          onClick={() => setWristSize(165)}
          aria-label="Reset wrist size"
          className="rounded-full p-1.5 text-ink/50 hover:bg-ink/5"
        >
          <RotateCcw className="h-4 w-4" />
        </button>
        <div className="flex-1">
          <div className="mb-1 flex items-center justify-between text-xs text-ink/50">
            <span>Wrist Size</span>
            <span className="font-semibold text-ink">{wristSize}mm</span>
          </div>
          <input
            type="range"
            min={140}
            max={210}
            step={1}
            value={wristSize}
            onChange={(e) => setWristSize(Number(e.target.value))}
            className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-line accent-maroon"
          />
        </div>
      </div>
      <p className="text-xs leading-relaxed text-ink/40">
        A stylised preview to help you visualise proportions on the wrist — actual fit may vary.
      </p>
    </div>
  );
}
