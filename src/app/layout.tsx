import type { Metadata } from "next";
import {
  Epilogue,
  Red_Hat_Display
} from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "QuickHire - Discover your dream job",
  description: "Great platform for the job seeker that passionate about startups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${epilogue.variable} ${redHatDisplay.variable} font-red-hat-display antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
