import { auth } from "@/auth";
import { redirect } from "next/navigation";
import AdminStats from "../../../components/AdminStats";

export default async function AdminDashboard() {
  const session = await auth();

  if (!session?.user) redirect("/auth/login");
  if (session.user.role !== "ADMIN") redirect("/dashboard");

  return (
    <div className="min-h-screen container mx-auto p-4 mt-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <AdminStats />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <a href="/admin/create-post" className="card bg-base-200 hover:bg-base-300 transition-colors">
          <div className="card-body">
            <h2 className="card-title">📝 Create New Post</h2>
            <p className="text-base-content/80">Publish new blog content</p>
          </div>
        </a>
        <a href="/admin/create-course" className="card bg-base-200 hover:bg-base-300 transition-colors">
          <div className="card-body">
            <h2 className="card-title">🎓 Create New Course</h2>
            <p className="text-base-content/80">Add educational content</p>
          </div>
        </a>
        <a href="/admin/users" className="card bg-base-200 hover:bg-base-300 transition-colors">
          <div className="card-body">
            <h2 className="card-title">👥 Manage Users</h2>
            <p className="text-base-content/80">View user analytics</p>
          </div>
        </a>
        <a href="/admin/analytics" className="card bg-base-200 hover:bg-base-300 transition-colors">
          <div className="card-body">
            <h2 className="card-title">📈 Platform Analytics</h2>
            <p className="text-base-content/80">View engagement metrics</p>
          </div>
        </a>
      </div>
    </div>
  );
}