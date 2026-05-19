import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NagWara — AI-First Transformation Consultancy",
  description:
    "We transform companies from the inside out, making them truly AI-first. From company brain to AI operating systems, we rebuild processes that scale without limits.",
  keywords: ["AI consultancy", "AI transformation", "AI-first", "company brain", "AI operating system"],
  openGraph: {
    title: "NagWara — AI-First Transformation",
    description: "We don't bolt AI onto your company. We rebuild it from the heart.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050508] text-[#f0f0f4]">
        {children}
      </body>
    </html>
  );
}
