import { prisma } from "@/prisma/prisma";
import PostCard from "../../components/PostCard";

export default async function BlogPage() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: { author: true, likes: true, comments: true },
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className="min-h-screen container mx-auto p-4 mt-8">
      <h1 className="text-4xl font-bold mb-8">Latest Posts</h1>
      <div className="space-y-6">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}