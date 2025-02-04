import { BsExclamationCircleFill } from 'react-icons/bs';

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="flex items-center space-x-2 p-2 rounded-lg text-red-500 bg-red-100">
      <BsExclamationCircleFill className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};
