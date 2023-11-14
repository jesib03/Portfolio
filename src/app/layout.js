import "./globals.css";
import { Providers } from "./providers";
import { Navbar, NavbarLink } from "../components/NavBar";
import Head from 'next/head';



export const metadata = {
  title: "Jessi Portfolio",
  description: "My personal portfolio",
  keywords: "portfolio, nextjs, tailwindcss",
  image: "/logoJess.png",
};

const links = [
  {
    label: "Home",
    route: "home",
  },
  {
    label: "About",
    route: "about",
  },
  {
    label: "Skills",
    route: "skills",
  },
  {
    label: "Projects",
    route: "projects",
  },
  {
    label: "Contact",
    route: "contact",
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Jessi Portfolio</title>
        <meta property="og:image" content={metadata.image} />
      </Head>
      <body>
        <Navbar>
          {links.map((link) => (
            <NavbarLink href={`#${link.route}`} key={link.route}>
              {/* <Link to={link.route} smooth={true} offset={-430} duration={500} >

              </Link> */}
              {link.label}
            </NavbarLink>
          ))}
        </Navbar>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
