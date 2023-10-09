"use client"
import React from "react";
import { useSession , signOut, signIn} from "next-auth/react";

export const SigninButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
    <div className="flex gap-44 ml-auto">
        <p className="text-sky-600">{session.user.name}</p>
        <button onClick={() => signOut()} className="text-red-600">Sign Out</button>
    </div>
    );
  }
  return (
      <button onClick={() => signIn('google')} className="text-green-600 ml-auto"> Sign In</button>
      )
  
};

export default SigninButton;
