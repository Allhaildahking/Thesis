import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thesis — Brands That Make Sense",
  description: "Thesis is a brand strategy and creative agency building clear, memorable brands through strategy, identity, digital design, and creative direction.",
  metadataBase: new URL("https://thesishq.com"),
  openGraph: { title: "Thesis — Brands That Make Sense", description: "Strategy, identity, digital, and everything in between.", type: "website", siteName: "Thesis" },
  twitter: { card: "summary", title: "Thesis — Brands That Make Sense", description: "Strategy, identity, digital, and everything in between." },
  icons: { icon: "/Thesis Logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
