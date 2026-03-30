import { Funnel_Display, Geist } from "next/font/google";
import localFont from "next/font/local";

export const fontDisplay = Funnel_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const fontMono = localFont({
  display: "swap",
  src: "../app/fonts/PaperMono-Regular.woff2",
  variable: "--font-mono",
});
