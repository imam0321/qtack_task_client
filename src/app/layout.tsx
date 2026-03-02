import type { Metadata } from "next";
import { Epilogue, Red_Hat_Display, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Suspense } from "react";
import LoginSuccessToast from "@/components/shared/LoginSuccessToast";
import LogoutSuccessToast from "@/components/shared/LogoutSuccessToast";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "QuickHire - Discover your dream job",
  description:
    "Great platform for the job seeker that passionate about startups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${epilogue.variable} ${redHatDisplay.variable} ${inter.variable} font-epilogue antialiased`}
      >
        {children}
        <Toaster position="top-right" richColors />
        <Suspense fallback={null}>
          <LoginSuccessToast />
          <LogoutSuccessToast />
        </Suspense>
      </body>
    </html>
  );
}
