"use client";
import React from "react";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  return (
    <div>
      <h1>Profile</h1>
      <pre>
        {JSON.stringify({
          session,
          status,
        })}
      </pre>
    </div>
  );
}
