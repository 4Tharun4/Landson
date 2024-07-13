// import NextAuth from "next-auth/next";
// import Credentials from "next-auth/providers/credentials";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { compare } from "bcryptjs";
// import db from "./db";

// export const AuthOptions={
//     adapter:PrismaAdapter(db),
//     secret:process.env.NEXTAUTH_SECRET,
//     session:{
//         strategy:"JWT",
//     },
//     pages:{
//         signIN:"/login",
//     },
//     providers:[
//         CredentialsProvider({
//          name:"Creditionals",
//          credentials:{
//             email:{label:"Email",type:"Email",placeholder:"t@gmail.com"},
//             password:{label:"Password",type:"password",placeholder:"RandomPassword"},
//             DealerId:{label:"DealerId",type:"DealerId",placeholder:"LS893433"}
//          },
//          async authorize(credentials){
//             try{
// console.log("Authorize Credtionals",credentials);

// if(!credentials?.email || !credentials?.password || !credentials?.DealerId){
//     throw{error:"No Inputs Found",status:401}
// }
// console.log("Test case Passed 1");

// 4
//             }catch{

//             }
//          }
//         })
//     ]
// }