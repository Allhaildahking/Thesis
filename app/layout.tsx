import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thesis — Make your brand undeniable.",
  description:
    "Thesis is a branding agency helping ambitious startups build strategic brands and digital experiences people remember.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
