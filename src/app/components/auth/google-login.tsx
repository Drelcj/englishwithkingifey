'use client';

import { googleAuthenticate } from '@/actions/google-login';
import React from 'react';
import { useActionState } from 'react';
import { BsGoogle } from 'react-icons/bs';

const GoogleLogin = () => {
  const [errorMsgGoogle, dispatchGoogle] = useActionState(googleAuthenticate, undefined); //googleAuthenticate hook
  return (
    <form className="flex flex-col mt-4 items-center" action={dispatchGoogle}>
      <button className='btn btn-outline flex items-center gap-3 w-full'>
        <BsGoogle className="w-5 h-5" />
        Google Sign In
      </button>
      {errorMsgGoogle && <p className="text-blue-500 mt-2">{errorMsgGoogle}</p>}
    </form>
  );
}

export default GoogleLogin;
