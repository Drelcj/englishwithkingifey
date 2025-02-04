import { AiOutlineCheckCircle } from 'react-icons/ai';

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;
  return (
    <div className="flex space-x-4 items-center p-2 rounded-lg text-blue-500 bg-blue-100">
      <AiOutlineCheckCircle className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};
