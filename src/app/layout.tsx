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
        <StoreProvider>
          {children}
          <CompareMenu />
        </StoreProvider>
      </body>
    </html>
  );
}
