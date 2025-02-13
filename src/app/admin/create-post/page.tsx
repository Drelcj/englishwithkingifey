"use client";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import RichTextEditor from "../../../components/RichTextEditor";
import { useState } from "react";

interface PostFormData {
  title: string;
  content: string;
  published: boolean;
}

export default function CreatePost() {
  const { data: session } = useSession();
  const [content, setContent] = useState("");

  const form = useForm<PostFormData>({
    defaultValues: {
      title: "",
      content: "",
      published: true
    }
  });

  const onSubmit = async (data: PostFormData) => {
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.id ?? ''}`
        },
        body: JSON.stringify({
          ...data,
          content: content
        })
      });

      if (res.ok) {
        form.reset();
        setContent("");
        alert("Post created successfully!");
      }
    } catch (error) {
      console.error("Post creation failed:", error);
    }
  };

  if (!session || !session.user || session?.user.role !== "ADMIN") return <div>Unauthorized</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Post Title</span>
          </label>
          <input 
            {...form.register("title", { required: true })}
            className="input input-bordered w-full"
            placeholder="Enter post title"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Post Content</span>
          </label>
          <RichTextEditor content={content} onChange={setContent} />
        </div>

        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Publish Immediately</span>
            <input
              type="checkbox"
              {...form.register("published")}
              className="checkbox checkbox-primary"
            />
          </label>
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Publish Post
        </button>
      </form>
    </div>
  );
}