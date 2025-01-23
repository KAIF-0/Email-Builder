"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import TemplateCard from "./TemplateCard";
import { useEffect } from "react";
import Link from "next/link";

// const templates = [
//   {
//     id: 1,
//     name: "Welcome Email",
//     thumbnail: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     id: 2,
//     name: "Newsletter",
//     thumbnail: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     id: 3,
//     name: "Product Launch",
//     thumbnail: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     id: 4,
//     name: "Event Invitation",
//     thumbnail: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     id: 5,
//     name: "Thank You",
//     thumbnail: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     id: 6,
//     name: "Feedback Request",
//     thumbnail: "/placeholder.svg?height=300&width=400",
//   },
// ];

export default function AnimatedTemplateBrowser({ templates }) {
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
    <div className="min-h-screen bg-white text-black overflow-hidden">
      <motion.main
        className="container mx-auto px-6 py-24 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ background }}
      >
        <motion.h1
          className="text-6xl font-bold mb-12 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Email Templates
        </motion.h1>
        {templates && templates.length !== 0 ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:px-32"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {templates.map((template, index) => (
              <TemplateCard
                key={template.templateId}
                template={template}
                index={index}
              />
            ))}
          </motion.div>
        ) : (
          <div className="flex flex-col items-center pt-10 min-h-screen  space-y-6">
            <div className="text-center text-xl font-semibold text-gray-800">
              Oops! It seems we don&rsquo;t have any templates available right
              now.
            </div>
            <div className="text-center text-lg text-gray-600">
              Please check back later, or feel free to create a new template
              from scratch.
            </div>
            <div className="text-center text-md text-blue-600">
              <Link href={"/"} className="underline">
                Go back to homepage
              </Link>
            </div>
          </div>
        )}
      </motion.main>
    </div>
  );
}
