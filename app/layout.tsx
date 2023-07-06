import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Banner from "./sections/banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OnlineStore",
  description: "Assignment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        
        <Banner/>
        
        {children}</body>
    </html>
  );
}