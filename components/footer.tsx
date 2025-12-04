import Image from "next/image";
import Link from "next/link";
import { features } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-white/10 bg-black text-white">
      {/* Large Q-DAS Watermark Background */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-0 flex justify-center overflow-hidden">
        <span className="font-sans leading-none font-bold whitespace-nowrap text-white/5 md:translate-y-[-5%] md:text-[25vw]">
          Q-DAS
        </span>
      </div>
      <div className="max-w-8xl mx-auto px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="mb-6 h-12 w-40">
              <Image
                src="/Logo-footer.png"
                alt="QDAS Global Group"
                width={160}
                height={48}
                className="h-full w-auto object-contain"
              />
            </div>
            <p className="mb-6 max-w-md text-base leading-relaxed text-white/70">
              Building Africa's digital, energy, and infrastructure future
              through innovative solutions and transformative projects.
            </p>
          </div>

          {/* Divisions */}
          <div>
            <h3 className="mb-4 font-sans text-sm font-semibold tracking-wider text-white uppercase">
              Our Divisions
            </h3>
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature.title}>
                  <Link
                    href={feature.href}
                    target={feature.external ? "_blank" : undefined}
                    rel={feature.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {feature.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-sans text-sm font-semibold tracking-wider text-white uppercase">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@qdasglobal.com"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@qdasglobal.com"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  info@qdasglobal.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} QDAS Global Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
