'use client';

import React from 'react';
import { BsGoogle } from 'react-icons/bs';
import { signIn } from 'next-auth/react';

const GoogleLogin = () => {
  const handleGoogleSignIn = () => {
    signIn('google', { callbackUrl: '/dashboard'});
  }
  
  return (
    
      <button 
      onClick={handleGoogleSignIn} className='btn btn-outline flex items-center gap-3 w-full'>
        <BsGoogle className="w-5 h-5" />
        Google Sign In
      </button>
  
  );
}

export default GoogleLogin;
