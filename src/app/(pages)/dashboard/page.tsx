import { auth } from "@/auth";
import { redirect } from 'next/navigation';
// import UserCourses from "@/components/UserCourses";
// import UserProgress from "@/components/UserProgress";

export default async function DashboardPage() {
  const session = await auth();

  // Redirect unauthenticated users
  if (!session) redirect('/auth/login');
  
  // Redirect admins to admin dashboard
  if (session.user?.role === "ADMIN") redirect('/admin');

  return (
    <div className="min-h-screen container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome Back, {session.user?.name}</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* <UserCourses userId={session.user.id} /> */}
          <p>User Courses</p>
        </div>
        
        <div className="lg:col-span-1">
          {/* <User Progress userId={session.user.id} /> */}
          <p>User Progress</p>
          
          <div className="card bg-base-200 mt-6">
            <div className="card-body">
              <h2 className="card-title">📚 Quick Actions</h2>
              <div className="space-y-4 mt-4">
                <button className="btn btn-block">Continue Learning</button>
                <button className="btn btn-block">View Certificates</button>
                <button className="btn btn-block">Account Settings</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}