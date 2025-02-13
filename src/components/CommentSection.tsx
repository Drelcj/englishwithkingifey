"use client";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

interface Comment {
  id: string;
  content: string;
  createdAt: Date;
  author: { name: string };
}

export default function CommentSection({ postId }: { postId: string }) {
  const { data: session } = useSession();
  const [comments, setComments] = useState<Comment[]>([]);
  const { register, handleSubmit, reset } = useForm<{ content: string }>();

  useEffect(() => {
    fetch(`/api/posts/${postId}/comments`)
      .then(res => res.json())
      .then(setComments);
  }, [postId]);

  const onSubmit = async (data: { content: string }) => {
    const res = await fetch(`/api/posts/${postId}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user?.id ?? ''}`
      },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      reset();
      const newComment = await res.json();
      setComments(prev => [...prev, newComment]);
    }
  };

  return (
    <div className="space-y-6">
      {session ? (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <textarea
            {...register("content", { required: true })}
            className="textarea textarea-bordered w-full"
            placeholder="Write your comment..."
          />
          <button type="submit" className="btn btn-primary">
            Post Comment
          </button>
        </form>
      ) : (
        <div className="alert alert-info">
          Please login to post comments
        </div>
      )}

      <div className="space-y-4">
        {comments.map(comment => (
          <div key={comment.id} className="border-l-4 pl-4 border-primary">
            <p className="font-medium">{comment.author.name}</p>
            <p className="text-base-content/80">{comment.content}</p>
            <time className="text-sm text-base-content/60">
              {new Date(comment.createdAt).toLocaleDateString()}
            </time>
          </div>
        ))}
      </div>
    </div>
  );
}