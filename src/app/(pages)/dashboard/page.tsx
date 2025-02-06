import { auth } from "@/auth";
import { redirect } from 'next/navigation';

const DashboardPage = async () => {
  const session = await auth(); // Use your exported auth() function to get session

  if (!session) {
    redirect('/auth/login'); // Redirect to login page if no session
  }
  console.log(session);
  return (
    <div className="min-h-screen flex items-center justify-center">
      Welcome to your Dashboard Page
    </div>
  );
};

export default DashboardPage;
