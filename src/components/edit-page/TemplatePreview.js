"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Edit } from "lucide-react";
import Link from "next/link";
// import type { Template } from "@prisma/client"

export default function TemplatePreview({ template }) {
  const {
    title,
    content,
    footer,
    imageUrl,
    html,
    alignment,
    titleSize,
    titleColor,
    footerSize,
    footerColor,
  } = template;
  // console.log(template);
  const renderedHtml = html
    .replace(/{{title}}/g, title)
    .replace(/{{footer}}/g, footer)
    .replace(/{{imageUrl}}/g, imageUrl)
    .replace(/{{content}}/g, content)
    .replace(/{{titleSize}}/g, titleSize)
    .replace(/{{titleColor}}/g, titleColor)
    .replace(/{{footerSize}}/g, footerSize)
    .replace(/{{footerColor}}/g, footerColor);
  return (
    <div
      className={`text-${alignment}`}
      dangerouslySetInnerHTML={{
        __html: renderedHtml,
      }}
    />
  );
}
