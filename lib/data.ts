export interface Feature {
  title: string;
  description: string;
  image: string;
  gradient: string;
  href: string;
  external: boolean;
}

export const features: Feature[] = [
  {
    title: "Technology",
    description: "Digital transformation, cybersecurity, enterprise solutions.",
    image: "/technology.webp",
    gradient: "from-blue-600/90 via-blue-700/50 to-transparent",
    href: "https://q-das.vercel.app/", // Replace with original URL
    external: true,
  },
  {
    title: "Energy",
    description: "Downstream operations, renewables, industrial power systems.",
    image: "/energy.webp",
    gradient: "from-orange-600/90 via-yellow-500/50 to-transparent",
    href: "#", // Replace with original URL
    external: true,
  },
  {
    title: "Infrastructure",
    description: "Construction, engineering, and real estate development.",
    image: "/infrastructure.webp",
    gradient: "from-emerald-800/90 via-green-600/50 to-transparent",
    href: "#", // Replace with original URL
    external: true,
  },
];
