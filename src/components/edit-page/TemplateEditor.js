"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
// import type { Template, Alignment } from "@prisma/client"
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import { storage } from "@/config/appwrite-config/appwrite";
import { env } from "@/env";
import { ID } from "appwrite";
import { Loader } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

export default function TemplateEditor({ template, onTemplateChange }) {
  const [image, setImage] = useState(null);
  const { toast } = useToast();
  const [isImageUploading, setisImageUploading] = useState(false);
  const editor = useEditor({
    extensions: [StarterKit, TextStyle, Color],
    content: template.content,
    onUpdate: ({ editor }) => {
      const contentHtml = editor.getHTML();
      onTemplateChange({ content: contentHtml });
    //   console.log("Editor Content:", contentHtml);
    },
  });
  const handleImageRender = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader(); //image read karke object URL dega
      reader.onload = () => {
        console.log(reader.result);
        onTemplateChange({ imageUrl: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = async () => {
    if (!image) return;
    setisImageUploading(true);
    try {
      await storage
        .createFile(env.APPWRITE_BUCKET_ID, ID.unique(), image, ['read("any")'])
        .then((e) => {
          const imageUrl = `${env.APPWRITE_URL}/storage/buckets/${e.bucketId}/files/${e.$id}/view?project=${env.APPWRITE_PROJECT_ID}`;
          // console.log("File URL:", imageUrl);
          onTemplateChange({ imageUrl: imageUrl });
          toast({
            title: "Image Uploaded Successfully!",
            description: "Your Image has been saved successfully!",
          });
          setImage(null);
        });
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Failed to Upload Image!",
        description: "An error occurred while saving your Image.",
      });
    }
    setisImageUploading(false);
  };

  return (
    <motion.div
      className="w-full bg-white border-l p-4 "
      initial={{ x: 100 }}
      animate={{ x: 0 }}
    >
      <Toaster />
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-black text-gray-800 mb-2">
            Title
          </label>
          <input
            type="text"
            value={template.title}
            onChange={(e) => onTemplateChange({ title: e.target.value })}
            className="w-full p-2 border rounded text-gray-700"
          />
        </div>

        <div>
          <label className="block text-sm font-black text-gray-800 mb-2">
            Title Style
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-black text-gray-700 mb-1">
                Color
              </label>
              <input
                type="color"
                value={template.titleColor}
                onChange={(e) =>
                  onTemplateChange({ titleColor: e.target.value })
                }
                className="w-full h-8 rounded cursor-pointer border"
              />
            </div>
            <div>
              <label className="block text-xs font-black text-gray-700 mb-1">
                Size
              </label>
              <select
                value={template.titleSize}
                onChange={(e) =>
                  onTemplateChange({ titleSize: e.target.value })
                }
                className="w-full h-8 border rounded  text-gray-700"
              >
                {[
                  "1rem",
                  "1.5rem",
                  "2rem",
                  "2.5rem",
                  "3rem",
                  "3.5rem",
                  "4rem",
                  "4.5rem",
                  "5rem",
                ].map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-black text-gray-700 mb-2">
            Content
          </label>
          <EditorContent
            onChange={() => {
              console.log(editor.getHTML());
            }}
            editor={editor}
          />
        </div>

        <div>
          <label className="block text-sm font-black text-gray-700 mb-2">
            Alignment
          </label>
          <div className="flex space-x-2">
            {["left", "center", "right"].map((align) => (
              <button
                key={align}
                onClick={() => onTemplateChange({ alignment: align })}
                className={`flex-1 p-2 border text-gray-700 rounded capitalize ${
                  template.alignment === align
                    ? "bg-black text-white"
                    : "hover:bg-gray-50"
                }`}
              >
                {align}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-black text-gray-700 mb-2">
            Footer
          </label>
          <input
            type="text"
            value={template.footer}
            onChange={(e) => onTemplateChange({ footer: e.target.value })}
            className="w-full p-2 border rounded mb-2 text-gray-700"
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-black text-gray-700 mb-1">
                Color
              </label>
              <input
                type="color"
                value={template.footerColor}
                onChange={(e) =>
                  onTemplateChange({ footerColor: e.target.value })
                }
                className="w-full h-8 rounded cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-xs font-black text-gray-700 mb-1">
                Size
              </label>
              <select
                value={template.footerSize}
                onChange={(e) =>
                  onTemplateChange({ footerSize: e.target.value })
                }
                className="w-full h-8 border rounded text-gray-700"
              >
                {[
                  "0.75rem",
                  "1rem",
                  "1.25rem",
                  "1.5rem",
                  "2rem",
                  "2.5rem",
                  "3rem",
                  "3.5rem",
                  "4rem",
                ].map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-black text-gray-700 mb-2">
            Image
          </label>
          <div className="flex justify-around items-center ">
            <div className="border-2 border-dashed rounded-lg p-4 text-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageRender}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="cursor-pointer text-sm text-gray-600 hover:text-gray-900"
              >
                Click to upload image
              </label>
            </div>
            <button
              disabled={!image}
              onClick={handleImageUpload}
              className={`h-full min-w-[50%] px-4 py-4 bg-black text-white rounded hover:text-black hover:${
                image ? "cursor-pointer" : "cursor-not-allowed"
              } hover:bg-white hover:border`}
            >
              {isImageUploading ? (
                <Loader className="animate-spin mx-auto" />
              ) : (
                " Upload Image"
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
