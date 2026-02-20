import { Bitcount_Prop_Single, Geist } from "next/font/google";
import localFont from "next/font/local";

export const fontBitcount = Bitcount_Prop_Single({
  subsets: ["latin"],
  variable: "--font-bitcount",
  display: "swap",
  weight: "400",
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
