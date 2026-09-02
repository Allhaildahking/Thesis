import type { Metadata } from "next";
import "./globals.css";
import thesisLogo from "./Thesis Logo.png";

export const metadata: Metadata = {
  title: "Thesis — Make your brand undeniable.",
  description:
    "Thesis is a branding agency helping ambitious startups build strategic brands and digital experiences people remember.",
  icons: {
    icon: thesisLogo.src,
    apple: thesisLogo.src,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
