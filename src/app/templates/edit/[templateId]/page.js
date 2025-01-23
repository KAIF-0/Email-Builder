"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Save, Loader as Loader2 } from "lucide-react";
import Link from "next/link";
import TemplatePreview from "@/components/edit-page/TemplatePreview";
import TemplateEditor from "@/components/edit-page/TemplateEditor";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Loader from "@/app/loader";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchTemplateDetails } from "@/app/helper/fetchTemplateDetails";
import { saveTemplate } from "@/app/helper/saveTemplate";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
// import type { Alignment } from "@prisma/client"

export default function EditPage({ params }) {
  const [template, setTemplate] = useState({});
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  //   const { templateId } = useParams();
  const isUserTemplate = searchParams.get("userTemplate") === "true" ? true : false;
  const { templateId } = React.use(params);
  const { data, isLoading, error } = useQuery({
    queryKey: ["templateDetails", templateId, isUserTemplate],
    queryFn: fetchTemplateDetails,
    staleTime: 30000,
  });

  useEffect(() => {
    setTemplate((prev) => ({ ...prev, ...data }));
  }, [data, isLoading]);

  const mutation = useMutation({
    mutationFn: saveTemplate,
    onSuccess: () => {
      toast({
        title: "Template Saved",
        description: "Your template has been saved successfully!",
      });
    },
    onError: (err) => {
      console.log(err.message);
      toast({
        variant: "destructive",
        title: "Failed to Save Template",
        description: "An error occurred while saving your template.",
      });
    },
  });

  const handleSaveTemplate = () => {
    mutation.mutate(template);
  };

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

  const handleTemplateChange = (updates) => {
    // console.log(data);
    // console.log(updates);
    setTemplate((prev) => ({ ...prev, ...updates }));
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-16">
      <Toaster />
      <motion.header
        className="bg-black border-b"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="max-w-full px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div
              onClick={() => router.back()}
              className="flex items-center justify-center text-black bg-white hover:animate-spin hover:cursor-pointer rounded-full"
            >
              <ArrowLeft className="size-8" />
            </div>
            <h1 className="text-xl text-white font-medium">
              {Object.keys(template).length ? template.name : data.name}
            </h1>
          </div>
          <div className="flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 text-white hover:text-gray-30000"
              onClick={() => setTemplate({ ...data })}
            >
              Discard Changes
            </motion.button>
            <motion.button
              disabled={Object.keys(template).length === 0}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 bg-white text-black rounded-md"
              onClick={handleSaveTemplate}
            >
              {mutation.isPending ? (
                <Loader2 className="size-6 animate-spin" />
              ) : (
                <>
                  <Save className="w-4 h-4 inline mr-2" /> Save
                </>
              )}
            </motion.button>
          </div>
        </div>
      </motion.header>

      <div className="md:flex  h-[calc(100vh-64px)] md:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="m-5 p-6 md:w-[60%] mx-auto bg-white rounded-lg shadow-md overflow-y-scroll scrollbar-hide"
        >
          <TemplatePreview
            template={Object.keys(template).length ? template : data}
          />
        </motion.div>
        <div className="md:w-[30%]  overflow-y-scroll scrollbar-hide">
          <TemplateEditor
            template={Object.keys(template).length ? template : data}
            onTemplateChange={handleTemplateChange}
          />
        </div>
      </div>
    </div>
  );
}
