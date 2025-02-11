"use client";

import { useState } from "react";

interface Post {
  id: string;
  title: string;
  content: string;
  likes: { length: number };
  comments: { length: number }[];
}

export default function PostCard({ post }: { post: Post }) {
  const [likes, setLikes] = useState(post.likes.length);

  const handleLike = async () => {
    try {
      const res = await fetch(`/api/posts/${post.id}/like`, {
        method: "POST",
      });
      
      if (res.ok) {
        setLikes((prev: number) => prev + 1);
      }
    } catch (error) {
      console.error("Failed to like post:", error);
    }
  };

  return (
    <div className="card bg-base-100 shadow-md mb-4">
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p>{post.content}</p>
        <div className="flex items-center gap-4 mt-4">
          <button onClick={handleLike} className="btn btn-sm">
            ❤️ {likes}
          </button>
          <button className="btn btn-sm">💬 {post.comments.length}</button>
          <button className="btn btn-sm">🔖 Bookmark</button>
        </div>
      </div>
    </div>
  );
}