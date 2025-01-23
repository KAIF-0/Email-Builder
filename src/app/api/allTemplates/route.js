import prisma from "@/config/prisma-config/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const allTemplates = await prisma.template.findMany({
      take: 10,
      orderBy: {
        createdAt: "asc",
      },
    });
    // console.log(allTemplates);
    return NextResponse.json(allTemplates, {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to fetch user templates" },
      {
        status: 500,
      }
    );
  }
}
