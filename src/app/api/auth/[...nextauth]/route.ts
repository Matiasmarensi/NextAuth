import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = nextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = { id: "1", fullname: "jhon", email: "jhon@gmail.com", password: "password" };
        return user;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
