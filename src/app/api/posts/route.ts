import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: body.authorId,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}