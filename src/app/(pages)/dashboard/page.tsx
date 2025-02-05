import { auth } from "@/auth";

const DashboardPage = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div> Welcome to your Dashboard Page</div>
  )
}

export default DashboardPage