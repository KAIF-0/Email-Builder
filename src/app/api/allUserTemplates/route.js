import prisma from "@/config/prisma-config/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { error: "User ID is required" },
      {
        status: 400,
      }
    );
  }

  try {
    const userTemplates = await prisma.userTemplate.findMany({
      where: {
        userId: userId,
      },
    });
    // console.log(userTemplates, userId);
    return NextResponse.json(userTemplates, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch user templates" },
      {
        status: 500,
      }
    );
  }
}
