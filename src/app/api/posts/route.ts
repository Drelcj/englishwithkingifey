// src/app/api/posts/route.ts
import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        published: body.published,
        authorId: body.authorId
      }
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error("Post creation error:", error); // Add error logging
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}