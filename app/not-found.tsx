import Image from "next/image";
import Link from "next/link";
import { features } from "@/lib/data";
import { COMPANY } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      {/* Background Image - using hero image for consistency */}
      <div className="absolute inset-0">
        <Image
          src="/hero.webp"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70" />
      <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />

      {/* Content */}
      <div className="max-w-8xl relative z-10 flex w-full flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
        {/* 404 Number */}
        <div className="mb-8">
          <h1
            className="animate-fade-in-up font-sans text-9xl leading-none font-bold text-white opacity-0 [animation-delay:200ms] md:text-[12rem]"
            style={{ animationFillMode: "forwards" }}
          >
            404
          </h1>
        </div>

        {/* Message */}
        <div className="mb-12 max-w-2xl">
          <h2
            className="animate-fade-in-up mb-4 font-sans text-3xl font-semibold text-white opacity-0 [animation-delay:400ms] md:text-5xl"
            style={{ animationFillMode: "forwards" }}
          >
            Page Not Found
          </h2>
          <p
            className="animate-fade-in-up text-lg leading-relaxed text-white/80 opacity-0 [animation-delay:600ms] md:text-xl"
            style={{ animationFillMode: "forwards" }}
          >
            The page you're looking for doesn't exist or has been moved. Let's
            get you back on track.
          </p>
        </div>

        {/* Quick Links to Divisions */}
        <div className="mb-12 w-full max-w-4xl">
          <p
            className="animate-fade-in mb-6 text-sm font-medium tracking-widest text-white/70 opacity-0 [animation-delay:800ms]"
            style={{ animationFillMode: "forwards" }}
          >
            EXPLORE OUR DIVISIONS
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {features.map((feature, index) => (
              <Link
                key={feature.title}
                href={feature.href}
                target={feature.external ? "_blank" : undefined}
                rel={feature.external ? "noopener noreferrer" : undefined}
                className="group animate-fade-in-up relative overflow-hidden rounded-lg border border-white/20 bg-white/5 p-6 text-left opacity-0 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
                style={{
                  animationDelay: `${1000 + index * 150}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <h3 className="mb-2 font-sans text-xl font-semibold text-white transition-transform duration-300 group-hover:-translate-y-1">
                  {feature.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-white/70">
                  {feature.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-transform duration-300 group-hover:translate-x-1">
                  Visit
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="animate-fade-in inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-8 py-3 font-sans text-base font-medium text-white opacity-0 backdrop-blur-sm transition-all duration-300 [animation-delay:1400ms] hover:border-white/50 hover:bg-white/20"
            style={{ animationFillMode: "forwards" }}
          >
            Return Home
          </Link>
          <a
            href={`mailto:${COMPANY.email}`}
            className="animate-fade-in inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3 font-sans text-base font-semibold text-gray-900 opacity-0 transition-all duration-300 [animation-delay:1600ms] hover:bg-white/90"
            style={{ animationFillMode: "forwards" }}
          >
            Contact Us
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
