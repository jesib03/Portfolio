import "./globals.css";
import { Providers } from "./providers";

import { Navbar, NavbarLink } from "../components/NavBar";

export const metadata = {
  title: "My Portfolio",
  description: "My personal portfolio",
  keywords: "portfolio, nextjs, tailwindcss",
};

const links = [
  {
    label: "Home",
    route: "",
  },
  {
    label: "About",
    route: "#about",
  },
  {
    label: "Skills",
    route: "#skills",
  },
  {
    label: "Projects",
    route: "#projects",
  },
  {
    label: "Contact",
    route: "#contact",
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar>
          {links.map((link) => (
            <NavbarLink href={link.route} key={link.route}>
              {link.label}
            </NavbarLink>
          ))}
        </Navbar>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
