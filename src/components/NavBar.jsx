"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Flex, Box, Image, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { css } from "@emotion/css";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function NavBar() {
  const { scrollY } = useScroll();

  const [blurIntensity, setBlurIntensity] = useState(0);

  const [activeSection, setActiveSection] = useState("home"); // Inicializa con la sección inicial

  // Detecta la sección actual basándose en el valor del scrollY
  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];
    const sectionOffsets = sections.map((section) => ({
      section,
      offsetTop: document.getElementById(section)?.offsetTop || 0,
    }));

    const currentSection = sectionOffsets.find(
      ({ offsetTop }, index) =>
        offsetTop <= scrollY &&
        (sectionOffsets[index + 1]?.offsetTop || Infinity) > scrollY
    );

    if (currentSection) {
      setActiveSection(currentSection.section);
    }
  }, [scrollY]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const blurIncrement = 0.1;
    const maxBlur = 10;

    if (latest > 150) {
      const newBlurIntensity = Math.min(
        (latest - 150) * blurIncrement,
        maxBlur
      );
      setBlurIntensity(newBlurIntensity);
      const sections = ["home", "about", "skills", "projects", "contact"];
      const sectionTops = sections.map(
        (section) => document.getElementById(section)?.offsetTop || 0
      );

      for (let i = sections.length - 1; i >= 0; i--) {
        if (latest >= sectionTops[i]) {
          setActiveSection(sections[i]);
          break;
        }
      }
    } else {
      setBlurIntensity(0);
    }
  });

  return (
    <motion.nav
      style={{
        backdropFilter: `blur(${blurIntensity}px)`,
        backgroundColor: `linear-gradient(to bottom, #eeeeee 0%,#cccccc 100%), ${
          blurIntensity > 0 ? 0.8 : 0
        })`,
        position: "fixed", // Añade esta línea para mantener la barra en la parte superior
        width: "100%", // Añade esta línea para ocupar el ancho completo
        top: 0, // Añade esta línea para fijar la barra en la parte superior
        zIndex: 1000, // Añade esta línea para asegurar que esté encima de otros elementos
      }}
      initial={{ y: 0 }} // Añade esta línea para evitar que la barra comience oculta
      animate={{ y: 0 }} // Añade esta línea para evitar que la barra comience oculta
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        w="full"
        pl="100px"
        pr="100px"
        pt='1rem'
        rounded='2xl'
      >
        <Box>
          <Image src="/logoJess.png" alt="Jessica Brito" w="80px" h="70px" />
        </Box>
        <Flex gap='4rem' alignItems="center" >
          {links.map((link) => (
            <Link href={link.href} key={link.label} >
              <Button
                color={
                  activeSection === link.label.toLowerCase()
                    ? "#D52AA6"
                    : "white"
                }
                fontSize="18px"
                fontWeight="bold"
                letterSpacing='.1em'
                className={
                  activeSection === link.label.toLowerCase()
                    ? "bg-[hsla(0,0%,99%,.9)] rounded-lg px-4 p-1 shadow-white hover:shadow-sm drop-shadow-md"
                    : "transparent"
                }
                // _hover={{ bg: 'transparent', color: 'white' }}
                onClick={() => {
                  setActiveSection(link.label.toLowerCase());
                }}
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </Flex>
      </Flex>
    </motion.nav>
  );
}

export default NavBar;
