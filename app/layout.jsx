import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata = {
  title: "BlogCraft",
  description: "A next js blog app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider 
     publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      sectretKey={process.env.CLERK_SECRET_KEY}

    >
    <html lang="en">
      <body className="h-screen w-full bg-gradient-to-r from-blue-900 to-purple-600">
        <SignedOut>
          {/* <SignInButton /> */}
        </SignedOut>
        <SignedIn>
          {/* <UserButton /> */}
        </SignedIn>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  </ClerkProvider>
  );
}

