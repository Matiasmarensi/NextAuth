"use client";
import Image from "next/image";
import React from "react";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md p-6 bg-gradient-to-r from-slate-500 to-slate-900 border-y-slate-900 border-2 rounded-md shadow-zinc-950 text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">Bienvenido a tu Web con NextAuth</h1>
        {session ? (
          <>
            <p className="text-lg mb-4 text-white">¡Hola, {session.user?.name || "Usuario"}!</p>
            <p className="text-lg mb-4 text-white">Explora las funciones protegidas en tu panel de control.</p>
          </>
        ) : (
          <p className="text-lg mb-4 text-white">
            Inicia sesión o regístrate para acceder a todas las características.
          </p>
        )}
      </div>
    </div>
  );
}
