import type { Metadata } from "next";
import { Bangers } from "next/font/google";
import "./globals.css";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-comic",
});

export const metadata: Metadata = {
  title: "Solar Systtem",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={bangers.variable}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
