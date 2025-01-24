import prisma from '@/lib/prismaClient'
import NextAuth, { NextAuthOptions, Session, User } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'

// Define custom types for session callback parameters
type SessionParams = {
    session: Session
    token: JWT
    user: User
}

type RedirectParams = {
    url: string
    baseUrl: string
}

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SEC || '',
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'email', type: 'text', placeholder: '' },
                password: {
                    label: 'password',
                    type: 'password',
                    placeholder: '',
                },
            },

            async authorize(credentials: any) {
                try {
                    if (!credentials) {
                        throw new Error('Enter Valid Email And Password')
                    }
                    const { email, password } = credentials
                    //check is user already registered
                    const existingUser = await prisma.user.findUnique({
                        where: {
                            email: email,
                        },
                    })
                    if (existingUser) {
                        //compare passwords
                        const authorized = await bcrypt.compare(
                            password,
                            existingUser?.password || ''
                        )
                        if (authorized) {
                            return {
                                id: existingUser.id,
                                email: existingUser.email,
                            }
                        }
                    }
                    //create a user in database
                    //hash password before saving
                    const saltRound = 10
                    const hashedPass = await bcrypt.hash(password, saltRound)
                    const newUser = await prisma.user.create({
                        data: {
                            email: email,
                            password: hashedPass,
                        },
                    })
                    return {
                        id: newUser.id,
                        email: newUser.email,
                    }
                } catch (error) {
                    console.log(error, 'error in authorize')
                    return null
                }
            },
        }),
        // Add more providers if needed
    ],
    session: {
        strategy: 'jwt', // Use JWT strategy for session management
        maxAge: 30 * 24 * 60 * 60, // JWT expiry set to 30 days
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
    },
    callbacks: {
        async session({ session, token }: SessionParams): Promise<Session> {
            // Ensure session and session.user are defined before assigning properties
            if (session?.user && token.email) {
                session.user.email = token.email as string
            }
            //operation to db
            const user = await prisma.user.findFirst({
                where: {
                    email: token.email as string,
                },
            })
            //check if user already exists
            if (!user) {
                try {
                    const newUser = await prisma.user.create({
                        data: {
                            email: token.email as string,
                        },
                    })
                } catch (error) {
                    console.log(error, 'error in creating user to db')
                }
            }

            return session
        },
        async redirect({ url, baseUrl }: RedirectParams): Promise<string> {
            // Redirect logic: if URL starts with baseUrl, use it; otherwise, go to dashboard
            return url.startsWith(baseUrl) ? url : `${baseUrl}/dashboard`
        },
    },
}

// NextAuth handler setup for Next.js API routes
const handler = NextAuth(authOptions)

// Export handlers for GET and POST requests
export { handler as GET, handler as POST }
