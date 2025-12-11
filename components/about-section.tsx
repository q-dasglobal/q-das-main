"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-b from-[#0B0F19] via-[#0C1119] to-[#0B0F19] py-16 sm:py-24 md:py-32">
      {/* Subtle top border divider */}
      <div className="absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-white/5 to-transparent" />
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/3 via-transparent to-emerald-500/3" />
      <div className="max-w-8xl relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column: Typography & Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="relative mb-6 inline-block pb-2">
              <span className="text-sm font-bold tracking-widest text-slate-400 uppercase">
                Our Narrative
              </span>
              <div className="absolute bottom-0 left-0 h-0.5 w-full bg-linear-to-r from-blue-500 via-orange-500 to-emerald-500" />
            </div>

            <h2 className="mb-6 font-sans text-3xl leading-[1.1] font-bold text-white sm:mb-8 sm:text-4xl md:text-6xl lg:text-7xl">
              Defining the <br />
              <span className="bg-linear-to-r from-blue-400 via-orange-400 to-emerald-400 bg-clip-text text-transparent italic">
                shape
              </span>{" "}
              of tomorrow.
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-slate-400 sm:space-y-6 sm:text-lg">
              <p>
                We are a collective of forward-thinkers, engineers, and
                strategists united by a single ambition: to build the
                infrastructure that defines the future.
              </p>
              <p>
                QDAS Global Group doesn't just adapt to change; we drive it.
                From the energy grids that power nations to the digital networks
                that connect them, our footprint is etched in progress.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 sm:mt-12 sm:gap-8">
              <div className="group cursor-pointer">
                <p className="text-2xl font-bold text-white transition-colors group-hover:text-blue-400 sm:text-3xl">
                  Global
                </p>
                <p className="text-xs font-medium text-slate-500 sm:text-sm">
                  Perspective
                </p>
              </div>
              <div className="h-12 w-0.5 bg-linear-to-b from-blue-500 to-orange-500 sm:h-16"></div>
              <div className="group cursor-pointer">
                <p className="text-2xl font-bold text-white transition-colors group-hover:text-orange-400 sm:text-3xl">
                  Local
                </p>
                <p className="text-xs font-medium text-slate-500 sm:text-sm">
                  Mastery
                </p>
              </div>
              <div className="h-12 w-0.5 bg-linear-to-b from-orange-500 to-emerald-500 sm:h-16"></div>
              <div className="group cursor-pointer">
                <p className="text-2xl font-bold text-white transition-colors group-hover:text-emerald-400 sm:text-3xl">
                  Future
                </p>
                <p className="text-xs font-medium text-slate-500 sm:text-sm">
                  Ready
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[450px] w-full sm:h-[550px] md:h-[650px]"
          >
            {/* Background glow effects */}
            <div className="absolute top-1/4 right-1/4 -z-10 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl sm:h-64 sm:w-64" />
            <div className="absolute bottom-1/4 left-1/4 -z-10 h-48 w-48 rounded-full bg-orange-500/10 blur-3xl sm:h-64 sm:w-64" />

            {/* Main Image with decorative frame */}
            <div className="absolute top-0 right-0 h-[320px] w-[85%] sm:h-[380px] sm:w-[88%] md:h-[480px]">
              {/* Decorative corner frames */}
              <div className="absolute -top-2 -right-2 h-[40%] w-[40%] rounded-tr-3xl border-t-4 border-r-4 border-blue-400/30 sm:-top-3 sm:-right-3 sm:rounded-tr-4xl sm:border-t-[5px] sm:border-r-[5px] md:-top-4 md:-right-4 md:rounded-tr-[3rem] md:border-t-6 md:border-r-6" />
              <div className="absolute -bottom-2 -left-2 h-[40%] w-[40%] rounded-bl-3xl border-b-4 border-l-4 border-emerald-400/30 sm:-bottom-3 sm:-left-3 sm:rounded-bl-4xl sm:border-b-[5px] sm:border-l-[5px] md:-bottom-4 md:-left-4 md:rounded-bl-[3rem] md:border-b-6 md:border-l-6" />

              {/* Image container */}
              <div className="relative h-full w-full overflow-hidden rounded-tr-3xl rounded-bl-3xl shadow-2xl shadow-black/30 sm:rounded-tr-[3rem] sm:rounded-bl-[3rem] md:rounded-tr-[4rem] md:rounded-bl-[4rem]">
                <Image
                  src="/images/about-main.png"
                  alt="Modern African Infrastructure"
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0B0F19]/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-transparent to-emerald-500/10" />
              </div>
            </div>

            {/* Secondary Image (Overlapping) */}
            <div className="absolute bottom-6 left-0 h-[180px] w-[55%] sm:bottom-8 sm:h-[220px] sm:w-[58%] md:bottom-10 md:h-[280px]">
              {/* Decorative corner frame - bottom-left and top-right */}
              <div className="absolute -bottom-2 -left-2 h-[55%] w-[55%] rounded-bl-3xl border-b-4 border-l-4 border-orange-400/50 sm:-bottom-3 sm:-left-3 sm:rounded-bl-4xl sm:border-b-[6px] sm:border-l-[6px] md:-bottom-4 md:-left-4 md:rounded-bl-[2.5rem] md:border-b-8 md:border-l-8" />
              <div className="absolute -top-2 -right-2 h-[55%] w-[55%] rounded-tr-3xl border-t-4 border-r-4 border-blue-400/50 sm:-top-3 sm:-right-3 sm:rounded-tr-4xl sm:border-t-[6px] sm:border-r-[6px] md:-top-4 md:-right-4 md:rounded-tr-[2.5rem] md:border-t-8 md:border-r-8" />

              {/* Image container */}
              <div className="relative h-full w-full overflow-hidden rounded-tl-3xl rounded-br-3xl shadow-xl shadow-black/20 sm:rounded-tl-[2.5rem] sm:rounded-br-[2.5rem] md:rounded-tl-[3rem] md:rounded-br-[3rem]">
                <Image
                  src="/images/about-detail.png"
                  alt="Engineering Detail"
                  fill
                  className="object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-orange-500/5 via-transparent to-blue-500/5" />
              </div>
            </div>

            {/* Decorative dots pattern */}
            <div className="absolute top-[15%] left-[8%] hidden grid-cols-3 gap-2 opacity-40 md:grid">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-blue-400/60"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      {/* Subtle bottom border divider */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
