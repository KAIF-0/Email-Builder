"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import CTA from "./CTA";
import Footer from "./Footer";
import { useEffect } from "react";

export default function LandingPage() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const background = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(600px at ${x}px ${y}px, rgba(0, 0, 0, 0.15), transparent 80%)`
  );
  return (
    <div className="min-h-screen px-10 bg-white text-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ background }}
      >
        <Header />
        <Hero />
        <Features />
        <CTA />
        <Footer />
      </motion.div>
    </div>
  );
}
