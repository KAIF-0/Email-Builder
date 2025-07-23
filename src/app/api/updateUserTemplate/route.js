import prisma from "@/config/prisma-config/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { userId } = await auth();
  // console.log(userId);

  if (!userId) {
    return NextResponse.json(
      { error: "User ID is required" },
      {
        status: 400,
      }
    );
  }
  try {
    const templateData = await req.json();
    const {
      id,
      templateId,
      name,
      description,
      thumbnailUrl,
      title,
      titleSize,
      titleColor,
      footer,
      footerColor,
      footerSize,
      content,
      imageUrl,
      html,
      alignment,
    } = templateData;

    // console.log(templateData)

    if (!templateData) {
      throw new Error("Template data is required");
    }
    console.log("Template Updated!");
    const template = await prisma.userTemplate.update({
      where: {
        userId: userId,
        id: parseInt(id),
      },
      data: {
        name,
        templateId,
        description,
        thumbnailUrl,
        titleSize,
        titleColor,
        footerSize,
        footerColor,
        alignment,
        title,
        content,
        footer,
        imageUrl,
        html,
      },
    });


    return NextResponse.json(template, {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to save template" },
      {
        status: 500,
      }
    );
  }
}
