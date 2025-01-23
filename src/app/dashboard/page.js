"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import AccountDetails from "@/components/dash-page/AccountDetails";
import TemplateCard from "@/components/templates-page/TemplateCard";
import { User, Home, Mail, Bell, Loader } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import { fetchUserTemplates } from "../helper/fetchUserTemplates";
import Link from "next/link";

// Mock data for templates
const templates = [
  {
    id: 1,
    name: "Welcome Email",
    thumbnail: "/placeholder.svg?height=200&width=300",
    likes: 5,
  },
  {
    id: 2,
    name: "Newsletter",
    thumbnail: "/placeholder.svg?height=200&width=300",
    likes: 3,
  },
  {
    id: 3,
    name: "Product Launch",
    thumbnail: "/placeholder.svg?height=200&width=300",
    likes: 7,
  },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("account");
  const [likedData, setlikedData] = useState([]);
  const { isLoaded, user, isSignedIn } = useUser();
  //   console.log(user);
  const { data, isLoading, error } = useQuery({
    queryKey: ["userTemplates"],
    queryFn: fetchUserTemplates,
    staleTime: 30000,
  });

  //   data.map((template) => {
  //     const likeKey = `template_${template.id}_liked`;
  //     const newData = localStorage.getItem(likeKey);
  //     setlikedData((prev) => [...prev, newData]);
  //   });
  //   const likeKey = `template_${template.id}_liked`;
  //   const d = localStorage.getItem(likeKey);

  const getLikedData = () => {
    const likedTemplates = data
      ? data.filter((template) => {
          const likeKey = `template_${template.id}_liked`;
          return localStorage.getItem(likeKey) === "true";
        })
      : [];

    console.log(likedTemplates);
    setlikedData(likedTemplates);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
            >
              <Link href={"/"}>
                <Home size={20} />
              </Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
            >
              <Mail size={20} />
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center"
            >
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </motion.div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <nav className="flex space-x-4 mb-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeTab === "account"
                  ? "bg-gray-200 text-gray-900"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("account")}
            >
              Account
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeTab === "templates"
                  ? "bg-gray-200 text-gray-900"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("templates")}
            >
              Templates
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeTab === "liked templates"
                  ? "bg-gray-200 text-gray-900"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => {
                setActiveTab("liked templates");
                getLikedData();
              }}
            >
              Liked Templates
            </motion.button>
          </nav>
          {activeTab === "templates" &&
            (isLoading ? (
              <div className="flex justify-center items-center h-full mt-40">
                <Loader className="animate-spin text-black size-10" />
              </div>
            ) : data && data?.length !== 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {data &&
                  data.map((template) => (
                    <TemplateCard key={template.id} template={template} />
                  ))}
              </motion.div>
            ) : (
              <div className="text-center text-gray-600 mt-40">
                <h2 className="text-lg font-semibold">
                  No templates edited yet!
                </h2>
                <p className="mt-2">
                  Start creating your templates to see them here.
                </p>
              </div>
            ))}
          {activeTab === "account" &&
            (isLoaded ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <AccountDetails user={user} />
              </motion.div>
            ) : (
              <div className="flex justify-center items-center h-full mt-40">
                <Loader className="animate-spin text-black size-10" />
              </div>
            ))}
          {activeTab === "liked templates" &&
            (isLoading ? (
              <div className="flex justify-center items-center h-full mt-40">
                <Loader className="animate-spin text-black size-10" />
              </div>
            ) : data && data?.length != 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {likedData &&
                  likedData.map((template) => (
                    <TemplateCard key={template.id} template={template} />
                  ))}
              </motion.div>
            ) : (
              <div className="text-center text-gray-600 mt-40">
                <h2 className="text-lg font-semibold">
                  No templates liked yet!
                </h2>
                <p className="mt-2">Start liking templates to see them here.</p>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}
