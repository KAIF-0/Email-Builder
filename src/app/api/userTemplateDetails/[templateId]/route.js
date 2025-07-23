import prisma from "@/config/prisma-config/prisma";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function GET(req, { params }) {
  const { templateId } = await params;
  const { userId } = await auth();
  //   // console.log(templateId)
  if (!templateId || !userId) {
    return NextResponse.json(
      { error: "Template credentials are required!" },
      {
        status: 400,
      }
    );
  }

  try {
    const templateDetails = await prisma.userTemplate.findFirst({
      where: {
        userId: userId,
        id: parseInt(templateId),
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
    // console.log(error)
    return NextResponse.json(
      { error: "Failed to fetch template details" },
      {
        status: 500,
      }
    );
  }
}
