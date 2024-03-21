import type { Metadata } from "next";
// import "./globals.css";
import TopBar from "./components/navbar/TopBar";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

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

  // const GET_CURRENT_TEMPLATE = (): '/templates/default' | '/templates/theme1' => {
  //   return '/templates/theme1'
  // }

  // useEffect(()=>{
  //   GET_CURRENT_TEMPLATE()
  // }, [])

  return (
    <html lang="en">
      <head>
        {/* <link rel="stylesheet" href="./templates/default/style.css" /> */}
        <link rel="stylesheet" href="./templates/theme1/style.css" />
      </head>
      <body>
        <TopBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
