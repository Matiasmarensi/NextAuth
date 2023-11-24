"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import NavBar from "./components/NavBar";

interface Props {
  children: React.ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <SessionProvider>
      <NavBar />
      {children}
    </SessionProvider>
  );
}
