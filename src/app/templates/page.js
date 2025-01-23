"use client";
import Templates from "@/components/templates-page/Templates";
import { useAuth } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import { fetchAllTemplates } from "../helper/fetchAllTemplates";
import Loader from "@/app/loader";

import { motion } from "framer-motion";

export default function TemplatesPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["allTemplates"],
    queryFn: fetchAllTemplates,
    staleTime: 30000,
  });

  if (isLoading) {
    return (
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <Loader />
      </motion.header>
    );
  }

  return <Templates templates={data} />;
}
