import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcryptjs";
import db from "./db"; // Ensure this imports your Prisma client

export const AuthOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        identifier: {
          label: "Email or ID",
          type: "text",
          placeholder: "Email or ID",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const { identifier, password } = credentials;

          if (!identifier || !password) {
            throw new Error("No inputs found");
          }

          let user;
          if (identifier.includes("@")) {
            // If identifier is an email
            user = await db.Users.findUnique({
              where: { Email: identifier,
                OR:[
                  {UserId:identifier}
                ]
               },

            });
          } else {
            // If identifier is an ID
            
          }

          if (!user) {
            throw new Error("No user found");
          }

          const isValidPassword = await compare(password, user.password);

          if (!isValidPassword) {
            throw new Error("Incorrect password");
          }

          return user;
        } catch (error) {
          console.error("Authorize credentials error:", error);
          return null;
        }
      },
    }),
  ],
};
