import { SessionProvider } from "next-auth/react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "kingifeyacademy",
  description:
    "King Ifey is a linguist with a passion for helping professionals achieve clear and confident communication. He's a broadcast journalist, voiceover artist, PR consultant, and the author of 'Win with the Right Grammar'.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <SessionProvider>
          <Navbar />
          <main className="flex-grow pt-20">
            {" "}
            <Toaster
              position="top-center"
              toastOptions={{
                className:
                  "bg-base-100 text-base-content border border-base-300",
                duration: 5000,
              }}
            />
            {children}
          </main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
