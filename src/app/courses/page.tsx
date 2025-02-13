import { prisma } from "@/prisma/prisma";
import CourseCard from "../../components/CourseCard";

export default async function CoursesPage() {
  const courses = await prisma.course.findMany({
    where: { published: true },
    include: { author: true }
  });

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Available Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <CourseCard key={course.id} course={{ ...course, previewUrl: course.previewUrl ?? undefined, author: { ...course.author, name: course.author.name ?? '' } }} />
        ))}
      </div>
    </div>
  );
}