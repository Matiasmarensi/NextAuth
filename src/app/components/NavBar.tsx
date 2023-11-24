// components/NavBar.js

import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function NavBar() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <nav className="bg-slate-500 p-4">
      <div className="flex justify-between container mx-auto">
        <Link href="/">
          <h1 className="font-bold text-xl">NextAuth</h1>
        </Link>
        <ul className="flex gap-x-2">
          {session ? (
            <li className="px-3 py-1">
              <Link href="/dashboard">Profile</Link>
            </li>
          ) : (
            <>
              <li className="px-3 py-1">
                <Link href="/about">About</Link>
              </li>
              <li className="px-3 py-1">
                <Link href="/login">Login</Link>
              </li>
              <li className="px-3 py-1">
                <Link href="/Register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
