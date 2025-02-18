import { prisma } from "@/prisma/prisma";
import { notFound } from "next/navigation";
import PostContent from "../../../components/PostContent";
import CommentSection from "@/src/components/CommentSection";

// 1. Define interface with proper TypeScript syntax
type Params = {
    postId: string;
  };

// 2. Async component with typed props
export default async function PostPage({ params }: { params: Params }) {
  const { postId } = params;

  const post = await prisma.post.findUnique({
    where: { id: postId },
    include: { author: true, comments: true },
  });

  if (!post || !post.published) return notFound();

  return (
    <article className="max-w-3xl mx-auto p-4 prose lg:prose-xl">
      <h1 className="text-5xl font-bold mb-2">{post.title}</h1>
      <div className="flex items-center gap-4 text-sm mb-8">
        <span>By {post.author?.name || "Admin"}</span>
        <span>•</span>
        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
      </div>

      <PostContent content={post.content} />

      <div className="mt-8 flex items-center justify-between">
        <section className="mt-16">
          <CommentSection postId={params.postId} />
        </section>
      </div>
    </article>
  );
}

// 4. Add this type declaration if using generateMetadata
export async function generateMetadata({ params }: { params: Params }) {
  return {
    title: `Post ${params.postId}`,
    description: "Blog post details",
  };
}