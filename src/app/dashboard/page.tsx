"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-md p-4 text-gray-300 bg-slate-900 shadow-slate-400 shadow-2xl rounded-md ">
        <h1 className="text-3xl  font-bold mb-4 text-center">Profile</h1>
        <pre className="whitespace-normal  break-words overflow-auto text-m  max-h-max">
          {JSON.stringify({
            session,
            status,
          })}
        </pre>
      </div>
      <button className="bg-rose-900 text-stone-50 py-2 px-5 rounded-md m-5 hover:bg-red-800" onClick={() => signOut()}>
        Logout
      </button>
    </div>
  );
}
