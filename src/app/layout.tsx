import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Product Image Enhancer - LC | AI Image Enhancement for Shopify",
  description: "Instantly enhance product images, remove backgrounds, and boost conversions with our AI-powered Shopify app.",
  keywords: "shopify image enhancement, product image AI, background removal, image optimization, shopify photo editor, AI product photos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <footer className="bg-gray-50 mt-12 py-8">
          <div className="container mx-auto px-4 text-center text-gray-500">
            <p>© {new Date().getFullYear()} AI Product Image Enhancer - LC. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
