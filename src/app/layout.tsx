import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MouseFollower from "@/components/MouseFollower";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Sandeep Rathod | Portfolio",
  description: "Portfolio of Sandeep Rathod - Creative developer and designer specializing in web development, video editing, and graphic design.",
  keywords: ["Sandeep Rathod", "Portfolio", "Web Developer", "Video Editor", "Graphic Designer"],
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${playfairDisplay.variable} antialiased`}>
        <MouseFollower />
        {children}
        <Navbar />
      </body>
    </html>
  );
}
