import type { Metadata } from "next";
import "./globals.css";
import TopBar from "./components/navbar/TopBar";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
// import '@/app/templates/default/index.css'
import '@/app/templates/theme1/index.css'

export const metadata: Metadata = {
  title: "Wawa Cosmetic Store",
  description: "wawa cosmetic store",
  icons: '/logo.jpg'
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
