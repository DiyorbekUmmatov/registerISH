import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { AnimatedBackground } from "@/components/ui/animated-background";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "UMD Auth | Premium Demo",
  description:
    "Premium authentication UX demo with glassmorphism, animations, and localStorage-driven auth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${display.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        <Providers>
          <div className="relative min-h-screen overflow-hidden">
            <AnimatedBackground />
            <div className="relative z-10 flex min-h-screen flex-col">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
