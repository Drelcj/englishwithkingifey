import { auth } from "auth";
import { redirect } from 'next/navigation';
import LoginForm from "../../components/auth/forms/login-form";

const LoginPage = async () => {
  const session = await auth();

  if (session) {
    redirect('/dashboard');
  }

  return (
    <LoginForm />
  );
};

export default LoginPage;