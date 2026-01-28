import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/lib/prisma"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    Credentials({
        name: "Credentials",
        credentials: {
            username: { label: "Username", type: "text" },
            password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
            // TODO: Replace with Real Password Check (bcrypt)
            // For MVP: We still simulate login based on username, 
            // but effectively we can now query the DB if we wanted.
            
            if (credentials.username === "student") {
                return { id: "student-id-1", name: "Student Demo", email: "student@careeros.uz", role: "STUDENT" }
            }
             if (credentials.username === "employer") {
                return { id: "employer-id-1", name: "Employer Demo", email: "corp@careeros.uz", role: "EMPLOYER" } 
            }
             if (credentials.username === "admin") {
                return { id: "admin-id-1", name: "Admin Demo", email: "admin@careeros.uz", role: "ADMIN" }
            }
            return null
        }
    })
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
      jwt({ token, user }) {
          if (user) {
              // @ts-ignore
              token.role = user.role
          }
          return token
      },
      session({ session, token }) {
          if (token && session.user) {
              // @ts-ignore
              session.user.role = token.role
          }
          return session
      }
  }
})
