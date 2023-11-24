"use client";
import React, { FormEvent, useState } from "react";
import axios, { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);

      const res = await signIn("credentials", {
        email: formData.get("email"),
        password: formData.get("password"),
        redirect: false,
      });
      console.log(res);
      if (res?.ok) return router.push("./dashboard");
      if (res?.error) return setError(res.error as string);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);
        console.log(error);
      }
    }
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="text-center">
        <h1 className="text-xl">Sign up</h1>
        {error && <p className="bg-red-500 text-white p-2 mb-2">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="jgomez@mail.com" className="px-4 mb-2 block bg-slate-500" />
          <input type="password" name="password" placeholder="******" className="px-4 mb-2 block bg-slate-500" />
          <button className="bg-blue-600 px-4 py-2">Login</button>
        </form>
      </div>
    </div>
  );
}
