import { auth } from "../../../../auth";
import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const session = await auth();
        // console.log("Auth.js v5 Session object:", session); 

        if (!session?.user?.id) {
            console.log("Unauthorized - No valid session or user ID found.");
            return NextResponse.json(
                { error: "Unauthorized - Please login." },
                { status: 401 }
            );
        }

        const body = await req.json();
        if (!body.title || !body.content) {
            return NextResponse.json(
                { error: "Title and content are required" },
                { status: 400 }
            );
        }

        const post = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                published: body.published,
                 authorId: session.user.id as string,
            },
            include: {
                author: true
            }
        });

        return NextResponse.json(post);

    } catch (error: unknown) {
        console.error("Post creation error:", error);
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        return NextResponse.json(
            { error: "Failed to create post - please try again. " + errorMessage },
            { status: 500 }
        );
    }
}