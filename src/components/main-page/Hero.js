"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-5xl font-bold mb-6">
            Create stunning email templates with ease
          </h1>
          <p className="text-xl mb-8">
            EmailForge helps you design and send beautiful email campaigns in
            minutes, no coding required.
          </p>
          <motion.button
            className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={'/templates'}> Get Started</Link>
          </motion.button>
        </motion.div>
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image
            src="https://media.istockphoto.com/id/1337458287/vector/email-marketing-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=25JfbyP_I9fR3sBWJsNTPZ1vzHPr8nHK2bFRmQDYiwE="
            alt="Email Forge Interface"
            width={500}
            height={400}
            className="rounded-lg shadow-2xl border-black border-2"
          />
        </motion.div>
      </div>
    </section>
  );
}
