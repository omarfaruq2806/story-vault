import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Story Vault | Discover & Share Your Stories",
    template: "%s | Story Vault"
  },
  description: "Story Vault is the ultimate platform for readers and writers. Discover compelling short stories, share your own creative writing, and join a community of storytellers.",
  keywords: ["stories", "creative writing", "read stories", "write stories", "story vault", "fiction", "books"],
  authors: [{ name: "Omar Faruq" }],
  openGraph: {
    title: "Story Vault | Discover & Share Your Stories",
    description: "Join the creative community at Story Vault to read and share amazing stories.",
    url: "https://story-vault-rho.vercel.app",
    siteName: "Story Vault",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Story Vault",
    description: "Discover and share stories on Story Vault.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      data-theme="light"
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Toaster />
        <Navbar></Navbar><main>{children}</main><Footer></Footer>
      </body>
    </html>
  );
}
