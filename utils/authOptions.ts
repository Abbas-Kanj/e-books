import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/config/database";
import User from "@/models/User";
import type { NextAuthOptions } from "next-auth";
import type { GoogleProfile } from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // Invoked on successful signin
    async signIn({ user, account, profile, email, credentials }) {
      const googleProfile = profile as GoogleProfile;

      // Connect to Db
      await connectDB();

      // Check if user exists
      const userExists = await User.findOne({ email: googleProfile.email });

      // if not, add user to db
      if (!userExists) {
        // Truncate user name if too long
        const username = googleProfile.name?.slice(0, 20) || "";

        await User.create({
          email: googleProfile.email,
          username,
          image: googleProfile.picture || "",
        });
      }
      // return true to allow signin
      return true;
    },
    // Modified the session object
    async session({ session }) {
      // Get user from database
      const user = await User.findOne({ email: session.user.email });
      // Assign the userID to the session
      session.user.id = user._id.toString();
      // return the session
      return session;
    },
  },
};
