import "./globals.css";
import { Providers } from "./providers";
import Head from 'next/head';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export const metadata = {
  title: "Jessi Portfolio",
  description: "My personal portfolio",
  keywords: "portfolio, nextjs, tailwindcss",
  image: "/logoJess.png",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <Head>
        <title>Jessi Portfolio</title>
        <meta property="og:image" content={metadata.image} />
      </Head>
      <body>
        <NavBar />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
