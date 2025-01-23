"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Linkedin, Github, Mail, Phone } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { name: "Instagram", icon: <Instagram />, url: "https://www.instagram.com/_k_ai_f_01_/" },
    { name: "LinkedIn", icon: <Linkedin />, url: "www.linkedin.com/in/kaif-khan-47bb19292" },
    { name: "GitHub", icon: <Github />, url: "https://github.com/kaif-0/" },
    { name: "Email", icon: <Mail />, url: "mailto:your.email@example.com" },
  ]

  return (
    <motion.div
    className="bg-gray-100 py-12"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-4">EmailBuilder</h3>
          <p className="text-gray-600">Create stunning email templates with ease.</p>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/templates" className="text-gray-600 hover:text-gray-900 transition-colors">
                Templates
              </Link>
            </li>
            <li>
              <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </Link>
            </li>
          </ul>
        </motion.div>
        <motion.div
          id="contact"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <Phone size={18} />
              <span className="text-gray-600">+91 8700979251</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={18} />
              <a
                href="mailto:contact@emailbuilder.com"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                contact@emailbuilder.com
              </a>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div
        className="mt-8 pt-8 border-t border-gray-200 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <p className="text-gray-600">&copy; {new Date().getFullYear()} EmailBuilder. All rights reserved.</p>
      </motion.div>
    </div>
  </motion.div>
  )
}

