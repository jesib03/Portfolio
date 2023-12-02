import "./globals.css";
import { Providers } from "./providers";
import Head from 'next/head';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export const metadata = {
  title: "Jessi Portfolio",
  description: "My personal portfolio",
  keywords: "portfolio, nextjs, tailwindcss",
  icons: {
    icon: "/logoJess.png",
    shortcut: "/logoJess.png",
    apple: "/logoJess.png",
    other: "/logoJess.png",
    maskable: "/logoJess.png",
  }

};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <Head>  
      <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:image" content={metadata.image} />
        <link rel="icon" type="image/ico" href={metadata.icons.icon} />
      </Head>
      <body>
        <NavBar />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
