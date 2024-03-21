import "./globals.css";
import TopBar from "./components/navbar/TopBar";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ContextProvider from "./store/ContextProvider";
import { Metadata } from "next";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ContextProvider>
          <TopBar />
          <Navbar />
          {children}
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
