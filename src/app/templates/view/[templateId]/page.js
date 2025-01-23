"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Edit } from "lucide-react";
import { fetchTemplateDetails } from "@/app/helper/fetchTemplateDetails";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/app/loader";
import TemplatePreview from "@/components/edit-page/TemplatePreview";
import React from "react";

export default function TemplateViewPage({ params }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { templateId } = React.use(params);
  const isUserTemplate = searchParams.get("userTemplate") === "true" ? true : false;
  const { data, isLoading, error } = useQuery({
    queryKey: ["templateDetails", templateId, isUserTemplate],
    queryFn: fetchTemplateDetails,
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

  if (error) {
    throw new Error(error);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 mt-16 mx-1">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden"
      >
        <div className="p-6">
          <div className="flex justify-between">
            <button
              onClick={() => {
                router.back();
              }}
              className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back
            </button>
            <Link
              href={`/templates/edit/${templateId}?userTemplate=${
                data?.userId ? true : false
              }`}
              className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4"
            >
              <Edit size={18} className="inline mr-2" />
              Edit
            </Link>
          </div>
          <TemplatePreview template={data} />
        </div>
      </motion.div>
    </div>
  );
}
