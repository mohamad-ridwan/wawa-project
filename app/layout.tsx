import type { Metadata } from "next";
import "./globals.css";
import TopBar from "./templates/default/navbar/TopBar";
import Navbar from "./templates/default/navbar";
import Footer from "./templates/default/footer";

export const metadata: Metadata = {
  title: "Wawa Cosmetic Store",
  description: "wawa cosmetic store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopBar/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
