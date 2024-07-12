import "./globals.css";
import type { Metadata } from "next";
import NextAuthSessionProvider from "./provider/sessionProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Sahaja Yoga",
  description: "Aaj ka Mahayoga",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <NextAuthSessionProvider>
          <Navbar />
          <main className="relative overflow-hidden">
            {children}
          </main>
          <Footer />
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}