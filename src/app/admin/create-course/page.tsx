// src/app/admin/create-course/page.tsx
"use client";
import { useForm } from "react-hook-form";

interface CourseFormData {
  title: string;
  description: string;
  content: string;
  price: number;
  isPaid: boolean;
  previewUrl: string;
}

export default function CreateCourse() {
  const form = useForm<CourseFormData>({
    defaultValues: {
      title: "",
      description: "",
      content: "",
      price: 0,
      isPaid: false,
      previewUrl: ""
    }
  });

  const onSubmit = async (data: CourseFormData) => {
    try {
      const res = await fetch("/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      
      if (res.ok) {
        form.reset();
        // Add success notification
      }
    } catch (error) {
      console.error("Course creation failed:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Course Title</span>
          </label>
          <input
            {...form.register("title")}
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            {...form.register("description")}
            className="textarea textarea-bordered h-32"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Course Content (Markdown supported)</span>
          </label>
          <textarea
            {...form.register("content")}
            className="textarea textarea-bordered h-64"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Price ($)</span>
          </label>
          <input
            type="number"
            {...form.register("price")}
            className="input input-bordered"
            min="0"
            step="0.01"
          />
        </div>

        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Paid Course</span>
            <input
              type="checkbox"
              {...form.register("isPaid")}
              className="checkbox"
            />
          </label>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Preview Video URL</span>
          </label>
          <input
            type="url"
            {...form.register("previewUrl")}
            className="input input-bordered"
          />
        </div>

        <button type="submit" className="btn btn-primary mt-4">
          Create Course
        </button>
      </form>
    </div>
  );
}