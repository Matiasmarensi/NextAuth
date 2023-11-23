import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { conectDB } from "@/libs/mogodb";
import User from "@/models/users";
import bcrypt from "bcryptjs";

const handler = nextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        await conectDB();

        const userFound = await User.findOne({ email: credentials?.email }).select("+password");
        console.log("userrrr", userFound);

        if (!userFound) throw new Error("invalid credentials");
        const isValidPassword = await bcrypt.compare(credentials!.password, userFound.password);
        console.log(isValidPassword);
        if (!isValidPassword) throw new Error("invalid credentials ");
        if (!isValidPassword) throw new Error("invalid credentials");

        return userFound;
      },
    }),
  ],
  callbacks: {
    jwt({ account, token, user, profile, session }) {
      if (user) token.user = user;

      return token;
    },
    session({ session, token }) {
      session.user = token.user as any;

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
