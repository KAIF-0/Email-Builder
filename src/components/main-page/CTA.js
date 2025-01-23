"use client"

import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ready to create stunning email campaigns?
        </motion.h2>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Sign up now and start building beautiful emails in minutes.
        </motion.p>
        <motion.button
          className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Get Started for Free
        </motion.button>
      </div>
    </section>
  )
}

