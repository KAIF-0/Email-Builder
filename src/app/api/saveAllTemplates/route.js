import prisma from "@/config/prisma-config/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { templates } = await req.json();
    console.log(templates);

    await prisma.template.deleteMany();

    if (!Array.isArray(templates)) {
        throw new Error("Templates is not an array");
      }
    console.log(templates)
    const savedTemplates = await prisma.template.createMany({
      data: templates.map((template) => ({
        name: template.name,
        description: template.description,
        thumbnailUrl: template.thumbnailUrl,
        titleSize: template.titleSize,
        titleColor: template.titleColor,
        footerSize: template.footerSize,
        footerColor: template.footerColor,
        alignment: template.alignment,
        title: template.title,
        content: template.content,
        footer: template.footer,
        imageUrl: template.imageUrl,
        html: template.html,
      })),
    });

    return NextResponse.json(savedTemplates, {
      status: 201,
    });
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: "Failed to save templates" },
      {
        status: 500,
      }
    );
  }
}
