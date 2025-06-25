/**
 * layout.tsx
 *
 * Root layout component for the Next.js application.
 * Sets up global providers, font, and layout structure for all pages.
 *
 * - Wraps the app in StoreProvider for global state (cart, favorites, compare).
 * - Applies the Inter font and global styles.
 * - Renders the CompareMenu on all pages.
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "./context/StoreContext";
import CompareMenu from "./Components/CompareMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PC Configurator",
  description: "Build your dream PC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Global store provider for cart, favorites, compare, etc. */}
        <StoreProvider>
          {children}
          {/* Persistent compare menu for all pages */}
          <CompareMenu />
        </StoreProvider>
      </body>
    </html>
  );
}
