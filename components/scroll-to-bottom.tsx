"use client";

import { HiArrowDown } from "react-icons/hi2";
import Image from "next/image";
import { useCallback } from "react";
import { cn } from "@/lib/utils";

type ScrollToBottomProps = {
  className?: string;
};

export default function ScrollToBottom({ className }: ScrollToBottomProps) {
  const scrollToDivisions = useCallback(() => {
    const divisionsSection = document.getElementById("divisions");
    if (divisionsSection) {
      divisionsSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <button
      onClick={scrollToDivisions}
      className={cn(
        "group relative shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105",
        className,
      )}
      aria-label="Scroll to bottom"
      type="button"
    >
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <Image
          src="/circle-hero.webp"
          alt="Circle background"
          fill
          className="object-cover"
          quality={85}
          sizes="(max-width: 768px) 160px, 176px"
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "linear-gradient(to right, rgba(119, 196, 28, 0.3) 0%, rgba(207, 79, 145, 0.3) 29%, rgba(0, 106, 206, 0.3) 46%, rgba(246, 171, 42, 0.3) 69%)",
            mixBlendMode: "color",
          }}
        />
      </div>

      <svg
        className="animate-spin-slow absolute inset-0 h-full w-full"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <defs>
          <path
            id="circlePath"
            d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
          />
        </defs>
        <text className="fill-gray-900 text-sm font-bold tracking-[0.25em] uppercase md:text-base">
          <textPath href="#circlePath">
            SCROLL DOWN TO SEE MORE * SCROLL DOWN TO SEE MORE
          </textPath>
        </text>
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <HiArrowDown className="h-14 w-14 text-gray-900" />
      </div>
    </button>
  );
}
