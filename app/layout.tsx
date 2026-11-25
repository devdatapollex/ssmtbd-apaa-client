import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";

import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const appUrl =
  process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") ??
  "http://localhost:3104";

export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  title: "Ananda Academy — Coming Soon",
  description:
    "Ananda Academy for Performing Arts (AAPA) — music, dance, painting, drama, and recitation. Public site coming soon.",
  applicationName: "Ananda Academy",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
