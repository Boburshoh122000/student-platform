import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CareerOS | Launch Your Career in Central Asia",
  description: "The #1 trusted career platform for students in Uzbekistan. Build your AI resume, find verified jobs, and track your applications free.",
  keywords: ["career", "resume builder", "jobs tashkent", "internships", "student jobs", "cv maker"],
};

import { GamificationProvider } from '@/context/GamificationContext';
import { ApplicationProvider } from '@/context/ApplicationContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased`} suppressHydrationWarning>
        <GamificationProvider>
          <ApplicationProvider>
            {children}
          </ApplicationProvider>
        </GamificationProvider>
      </body>
    </html>
  );
}
