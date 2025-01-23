"use client";

import { motion } from "framer-motion";
import { Mail, Image, Layout, Download } from "lucide-react";

const features = [
  {
    icon: <Mail />,
    title: "Customizable Templates",
    description: "Choose from a variety of pre-designed templates.",
  },
  {
    icon: <Image alt="Feature-Image" />,
    title: "Easy Image Upload",
    description: "Drag and drop images directly into your email designs.",
  },
  {
    icon: <Layout />,
    title: "Responsive Design",
    description: "Emails look great on all devices, from desktop to mobile.",
  },
  {
    icon: <Download />,
    title: "One-Click Download",
    description: "Download you edited template with just one click.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
