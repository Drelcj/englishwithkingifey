import { prisma } from "@/prisma/prisma";

export default async function AdminStats() {
  const [users, posts, courses] = await Promise.all([
    prisma.user.count(),
    prisma.post.count(),
    prisma.course.count()
  ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="stats bg-base-200">
        <div className="stat">
          <div className="stat-title">Total Users</div>
          <div className="stat-value">{users}</div>
        </div>
      </div>
      <div className="stats bg-base-200">
        <div className="stat">
          <div className="stat-title">Published Posts</div>
          <div className="stat-value">{posts}</div>
        </div>
      </div>
      <div className="stats bg-base-200">
        <div className="stat">
          <div className="stat-title">Available Courses</div>
          <div className="stat-value">{courses}</div>
        </div>
      </div>
    </div>
  );
}