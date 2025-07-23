"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ThumbsUp, MoreVertical, Edit } from "lucide-react";
import { useState, useEffect } from "react";

export default function TemplateCard({ template }) {
  const [showOptions, setShowOptions] = useState(false);
  const [userLiked, setUserLiked] = useState(false);
  // console.log(template);

  const getLikeKey = (templateId) => `template_${templateId}_liked`;

  useEffect(() => {
    const likeStatus = localStorage.getItem(getLikeKey(template.id));
    setUserLiked(likeStatus === "true");
  }, [template.id]);

  const handleLike = () => {
    const newLikeStatus = !userLiked;
    setUserLiked(newLikeStatus);
    localStorage.setItem(
      getLikeKey(template.id),
      newLikeStatus.toString()
    );
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden"
      whileHover={{
        scale: 1.03,
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      }}
    >
      <Link
        href={`/templates/view/${template.id}?userTemplate=${template?.userId ? true : false
          }`}
      >
        <div className="relative h-40">
          <Image
            src={template.thumbnailUrl || "/placeholder.svg"}
            alt={template.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{template.name}</h3>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleLike}
              className={`flex items-center space-x-2 ${userLiked ? "text-blue-500" : "text-gray-500"
                }`}
            >
              <ThumbsUp size={18} />
            </motion.button>
          </div>
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full hover:bg-gray-100"
              onClick={() => setShowOptions(!showOptions)}
            >
              <Link
                href={`templates/edit/${template?.id}?userTemplate=${template?.userId ? true : false
                  }`}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <Edit size={18} className="inline mr-2" />
                Edit
              </Link>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
