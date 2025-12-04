export const COMPANY = {
  name: "QDAS Global Group",
  email: "info@qdasglobal.com",
  tagline: "Building Africa's Digital, Energy & Infrastructure Future",
} as const;

export const SITE = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://qdasglobal.com",
  name: "QDAS Global Group",
} as const;
