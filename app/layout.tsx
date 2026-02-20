import "./globals.css";

import type { Metadata } from "next";

import { ThemeProvider } from "@/components/shared/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { fontBitcount, fontMono, fontSans } from "@/lib/fonts";
import {
  AnchoredToastProvider,
  ToastProvider,
} from "@/registry/default/ui/toast";

export const metadata: Metadata = {
  description:
    "Strayl documentation — everything you need to build, deploy, and manage apps with AI.",
  metadataBase: new URL("https://docs.strayl.dev"),
  title: "Strayl Docs",
  icons: {
    icon: [
      { url: "/logo-light.ico", media: "(prefers-color-scheme: dark)" },
      { url: "/logo-dark.ico", media: "(prefers-color-scheme: light)" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontBitcount.variable} ${fontMono.variable} relative bg-sidebar font-sans text-foreground antialiased`}
      >
        <ThemeProvider>
          <ToastProvider>
            <AnchoredToastProvider>
              <div className="relative isolate flex min-h-svh flex-col overflow-clip [--header-height:4rem]">
                {/* Double stripes — left (desktop only) */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-2 hidden w-px bg-border sm:block z-[45]" />
                <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-5 hidden w-px bg-border sm:block z-[45]" />
                {/* Double stripes — right (desktop only) */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-5 hidden w-px bg-border sm:block z-[45]" />
                <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-2 hidden w-px bg-border sm:block z-[45]" />
                <SiteHeader />
                <div
                  aria-hidden="true"
                  className="pointer-events-none sticky top-[var(--header-height)] z-30 -mb-8 h-8 bg-gradient-to-b from-sidebar to-transparent"
                />
                {children}
              </div>
            </AnchoredToastProvider>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
