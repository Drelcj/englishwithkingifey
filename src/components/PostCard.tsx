"use client";
import Link from "next/link";
import { formatDate } from "../lib/utils";
import { useState } from "react";

interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  author?: { name: string | null };
  likes: { length: number };
  comments: { id: string }[];
}

export default function PostCard({ post }: { post: Post }) {
  const [likes, setLikes] = useState(post.likes.length);

  const handleLike = async () => {
    try {
      const res = await fetch(`/api/posts/${post.id}/like`, { method: "POST" });
      if (res.ok) setLikes(prev => prev + 1);
    } catch (error) {
      console.error("Like failed:", error);
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
      <div className="card-body">
        <Link href={`/blog/${post.id}`} className="hover:no-underline">
          <h2 className="card-title text-3xl mb-2">{post.title}</h2>
          <div className="flex items-center gap-4 text-sm text-base-content/80">
            <span>By {post.author?.name || "Admin"}</span>
            <span>•</span>
            <span>{formatDate(post.createdAt)}</span>
          </div>
          <p className="mt-4 line-clamp-3">
            {post.content.replace(/<[^>]*>/g, '')}
          </p>
        </Link>
        
        <div className="flex items-center gap-4 mt-6">
          <button onClick={handleLike} className="btn btn-sm">
            ❤️ {likes}
          </button>
          <span className="btn btn-sm">💬 {post.comments.length}</span>
          <button className="btn btn-sm">🔖 Bookmark</button>
        </div>
      </div>
    </div>
  );
}