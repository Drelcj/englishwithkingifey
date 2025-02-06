import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4">
        <Image
          src="https://res.cloudinary.com/dt3czltxx/image/upload/v1717148951/404_page-not-found-1024x576_xexbvw.webp"
          alt="404 Page Not Found"
          className="w-full h-auto md:w-1/2 rounded-lg"
          width={1024}
          height={300}
        />
        <div className="text-center md:text-left">
          {/* <h1 className="text-3xl font-bold text-gray-800">404 - Page Not Found</h1> */}
          <p className="text-gray-500 mt-4">
            The page you&apos;re looking for might have been removed or never existed.
          </p>
          <Link href="/">
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Go Back Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
