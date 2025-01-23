import prisma from "@/config/prisma-config/prisma";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { templateId } = await params;
  // console.log(templateId)
  if (!templateId) {
    return NextResponse.json(
      { error: "Template ID is required" },
      {
        status: 400,
      }
    );
  }

  try {
    const templateDetails = await prisma.template.findUnique({
      where: {
        templateId: parseInt(templateId),
      },
    });
    // console.log(templateDetails)

    if (!templateDetails) {
      return NextResponse.json(
        { error: "Template not found" },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(templateDetails, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch template details" },
      {
        status: 500,
      }
    );
  }
}
