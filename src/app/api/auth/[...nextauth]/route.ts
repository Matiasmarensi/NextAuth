import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { conectDB } from "@/libs/mogodb";
import User from "@/models/users";
import bcryptjs from "bcryptjs";

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
        console.log("credential", credentials);
        const userFound = await User.findOne({ email: credentials?.email });

        console.log("user", userFound);

        return userFound;
      },
    }),
  ],
  callbacks: {
    jwt({ account, token, user, profile, session }) {
      token.hello = "HOLAAAAAA";
      return token;
    },
    session({ session, token }) {
      session.user = token.user as any;

      console.log({ session, token });

      return session;
    },
  },
});

export { handler as GET, handler as POST };
