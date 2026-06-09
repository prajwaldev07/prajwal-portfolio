import { Rajdhani, Syncopate } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const syncopate = Syncopate({
  variable: "--font-syncopate",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Prajwal Ponarkar | Full Stack Developer",
  description: "Formula 1 Inspired Developer Portfolio of Prajwal Ponarkar. High performance, precision, and technical excellence.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${rajdhani.variable} ${syncopate.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">{children}</body>
    </html>
  );
}
