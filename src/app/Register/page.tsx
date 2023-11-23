"use client";
import React, { FormEvent, useState } from "react";
import axios, { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [error, setError] = useState();
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email");
      const password = formData.get("password");
      const fullname = formData.get("fullname");
      const res = await axios.post("./api/auth/signup/", { email, password, fullname });

      signIn("credentials", {
        email: res.data.email,
        password: formData.get("password"),
        redirect: false,
      });
      if (res.status === 200) return router.push("./dashboard/profile");
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
          <input type="text" name="fullname" placeholder="Juan Gomez" className="px-4 mb-2 block bg-slate-500" />
          <input type="email" name="email" placeholder="jgomez@mail.com" className="px-4 mb-2 block bg-slate-500" />
          <input type="password" name="password" placeholder="******" className="px-4 mb-2 block bg-slate-500" />
          <button className="bg-blue-600 px-4 py-2">Register</button>
        </form>
      </div>
    </div>
  );
}
