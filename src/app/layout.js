import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/ui/TopBar";
import SideBar from "@/components/ui/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar />

        {children}
      </body>
    </html>
  );
}
