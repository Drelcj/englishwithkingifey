"use client";

import { googleAuthenticate } from '@/actions/google-login';
import { useActionState } from "react";
import { BsGoogle } from "react-icons/bs";

const GoogleLogin = () => {
  const [errorMsgGoogle, dispatchGoogle] = useActionState(
    googleAuthenticate,
    undefined
  ); //googleAuthenticate hook
  return (
    <form className="flex mt-4" action={dispatchGoogle}>
      <button className="btn btn-outline flex flex-row items-center gap-3 w-full">
        <BsGoogle className="w-5 h-5" />
        Google Sign In
      </button>
      {errorMsgGoogle && <p className="text-blue-500 mt-2">{errorMsgGoogle}</p>}
    </form>
  );
};

export default GoogleLogin;
