import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

const jbmono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kanishka Dharmarathne",
  description: "Portfolio of Kanishka Dharmarathne",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${grotesk.variable} ${jbmono.variable}`}>
      <body className="font-sans antialiased bg-night text-ink overflow-x-clip">
        {children}
      </body>
    </html>
  );
}
