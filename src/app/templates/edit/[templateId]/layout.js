import Footer from "@/components/main-page/Footer";
import Header from "@/components/main-page/Header";
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
