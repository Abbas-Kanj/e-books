import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Drawer from "@/components/Drawer";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BugButton from "@/components/BugButton";
import { getCookie } from "cookies-next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bookly",
  description:
    "Your digital library at your fingertips. Discover, buy, and enjoy thousands of eBooks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = getCookie("theme") || "luxury";

  return (
    <AuthProvider>
      <html lang="en" data-theme={theme}>
        <body className={inter.className}>
          <Drawer>{children} </Drawer>
          <Footer />
          <ToastContainer />
          <BugButton />
        </body>
      </html>
    </AuthProvider>
  );
}
