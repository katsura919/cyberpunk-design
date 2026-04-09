import type { Metadata } from "next";
import { JetBrains_Mono, Orbitron, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const headingFont = Orbitron({
  variable: "--font-heading",
  subsets: ["latin"],
});

const bodyFont = JetBrains_Mono({
  variable: "--font-body",
  subsets: ["latin"],
});

const labelFont = Share_Tech_Mono({
  variable: "--font-label",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Abie Maxey | UGC Videos + Web Development",
  description:
    "Digital nomad software engineer helping brands grow with high-converting UGC and modern web builds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} ${labelFont.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
