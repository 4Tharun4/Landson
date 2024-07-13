import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import {PrismaAdapter} from '@prisma/client'
import { compare } from "bcryptjs";
import db from "./db";

export const AuthOptions={
    adapter:PrismaAdapter(db),
    secret:process.env.NEXTAUTH_SECRET,
    session:{
        strategy:"JWT",
    },
    pages:{
        signIN:"/login",
    },
    providers:{
        
    }
}