import Link from "next/link";
import { formatCurrency } from "../lib/utils";

interface Course {
  id: string;
  title: string;
  previewUrl?: string;
  isPaid: boolean;
  price: number;
  author?: {
    name: string;
  };
  description: string;
}

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
      <figure>
        {course.previewUrl ? (
          <video 
            src={course.previewUrl} 
            className="w-full h-48 object-cover"
            muted
            controls
          />
        ) : (
          <div className="h-48 bg-base-200" />
        )}
      </figure>
      <div className="card-body">
        <Link href={`/courses/${course.id}`} className="hover:no-underline">
          <h2 className="card-title">{course.title}</h2>
          <div className="flex items-center justify-between mt-4">
            <span className="text-lg font-bold">
              {course.isPaid ? formatCurrency(course.price) : "Free"}
            </span>
            <span className="badge badge-primary">
              {course.author?.name}
            </span>
          </div>
          <p className="mt-2 line-clamp-3">{course.description}</p>
        </Link>
      </div>
    </div>
  );
}