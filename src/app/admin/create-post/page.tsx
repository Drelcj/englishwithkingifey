"use client";

import { useForm } from "react-hook-form";
import { useSession, /*signIn*/ } from "next-auth/react";
//import { User } from "next-auth";
import { useRouter } from "next/navigation";
declare module "next-auth" {
  interface User {
    role?: string;
  }
}

export default function CreatePost() {
  const { data: session } = useSession();
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit = async (data: { title: string; content: string }) => {
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          authorId: session?.user?.id,
        }),
      });

      if (res.ok) {
        router.push("/admin/dashboard");
      }
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  if (!session?.user || session.user.role !== "ADMIN") {
    return <div>Unauthorized</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            {...form.register("title")}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Content</span>
          </label>
          <textarea
            {...form.register("content")}
            className="textarea textarea-bordered h-64"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Post
        </button>
      </form>
    </div>
  );
}