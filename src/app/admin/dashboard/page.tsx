import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AdminDashboard() {
  const session = await auth();

  if (!session?.user || session.user.role !== "ADMIN") {
    redirect("/auth/login");
  }

  return (
    <div className= "min-h-screen container mx-auto p-4 mt-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a href="/admin/create-post" className="card bg-base-200 hover:bg-base-300 transition-colors">
          <div className="card-body">
            <h2 className="card-title">Create New Post</h2>
          </div>
        </a>
        <a href="/admin/create-course" className="card bg-base-200 hover:bg-base-300 transition-colors">
          <div className="card-body">
            <h2 className="card-title">Create New Course</h2>
          </div>
        </a>
      </div>
    </div>
  );
}