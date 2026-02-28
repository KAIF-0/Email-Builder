"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  useAuth,
  UserButton,
} from "@clerk/nextjs";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const { isSignedIn } = useAuth();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            href="/"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-500"
          >
            EmailForge
          </Link>
        </motion.div>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="flex flex-col items-center focus:outline-none"
          >
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </button>
        </div>

        <ul
          className={`hidden md:flex space-x-6 justify-center items-center transition-all duration-300`}
        >
          {["Templates", "Features", "Contact"].map((item, index) =>
            item === "Templates" ? (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 * 0.1 }}
              >
                <Link
                  href={
                    item === "Templates"
                      ? "/templates"
                      : `#${item.toLowerCase()}`
                  }
                  className="relative overflow-hidden group"
                >
                  <span className="relative z-10">{item}</span>
                  <motion.span
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-black"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.li>
            ) : (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 * 0.3 }}
              >
                <Link
                  href={
                    item === "Dashboard"
                      ? "/dashboard"
                      : `#${item.toLowerCase()}`
                  }
                  className="relative overflow-hidden group"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById(item.toLowerCase());
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    } else {
                      item === "Dashboard"
                        ? router.push("/dashboard")
                        : router.push(`/#${item.toLowerCase()}`);
                    }
                  }}
                >
                  <span className="relative z-10">{item}</span>
                  <motion.span
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-black"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.li>
            )
          )}
          {isSignedIn && (
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 * 0.1 }}
            >
              <Link
                href={"/dashboard"}
                className="relative overflow-hidden group"
              >
                <span className="relative z-10">Dashboard</span>
                <motion.span
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-black"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.li>
          )}
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3 * 0.1 }}
          >
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </motion.li>
        </ul>

        <ul
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white shadow-md md:hidden`}
        >
          <li className="border-b border-gray-200">
            <Link
              href={"/templates"}
              className="block px-6 py-4 text-gray-800 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Templates
            </Link>
          </li>
          {["Features", "Contact"].map((item) => (
            <li key={item} className="border-b border-gray-200">
              <Link
                href={`#${item.toLowerCase()}`}
                className="block px-6 py-4 text-gray-800 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
          {isSignedIn && (
            <li className="border-b border-gray-200">
              <Link
                href={"/dashboard"}
                className="block px-6 py-4 text-gray-800 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            </li>
          )}

          <li className="px-6 py-4">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
}
