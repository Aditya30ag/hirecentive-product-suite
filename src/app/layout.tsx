import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hirecentive - Making the World More Connected Through AI-Powered Hiring",
  description: "Hirecentive is revolutionizing the hiring landscape with AI-powered solutions. Our mission is to make this world a more connected space where AI helps people make a bigger impact, not take away jobs.",
  keywords: "AI hiring, resume builder, interview preparation, recruitment, MEITY, artificial intelligence, job matching",
  authors: [{ name: "Hirecentive Team" }],
  openGraph: {
    title: "Hirecentive - AI-Powered Hiring Solutions",
    description: "Revolutionizing hiring with AI-powered resume building, interview preparation, and intelligent candidate matching.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-gradient-to-br from-purple-900 via-blue-900 to-black min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
