"use client";
import React from "react";
import { Flex, Button, Image, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export function Navbar({ children }) {
  return (
    <Flex
      className="fixed top-[-0.25rem] z-40 h-20 w-full rounded-[1rem] flex items-center justify-between bg-opacity-50 font-semibold text-lg"
      pr="8em"
      ml="4em"
      mr="3em"
    >
      <Image src="/logoJess.png" alt="Tu Logo" w="90px" h="80px" mt="2" />
      <Box>{children}</Box>
    </Flex>
  );
}

export function NavbarLink({ href, children }) {
  const [currentPage, setCurrentPage] = useState("/");

  useEffect(() => {
    // Obtén la ruta actual cuando la página se carga
    const currentPath = window.location.hash;
    setCurrentPage(currentPath);
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const isActive = currentPage === href; // Verifica si este enlace es la página actual

  const activeStyles = {
    backgroundColor: "hsla(0, 0%, 99%, 0.9)",
    borderRadius: ".5rem",
    color: "rgb(213 41 166 / 100%)",
    backdropFilter: "blur(4rem)",
    paddingTop: "4",
    paddingBottom: "4",
    paddingRight: "12",
    paddingLeft: "12",
  };

  const hoverStyles = {
    boxShadow: "0 6px 4px rgba(0, 0, 0, 0.07), 0 2px 2px rgba(0, 0, 0, 0.06)",
  };

  return (
    <Button
      as="a"
      href={href}
      ml="80"
      color={isActive ? "rgb(213 41 166 / 100%)" : "white"} // Establece el color en función de si es la página actual
      bgColor="transparent"
      gap="1.25rem"
      letterSpacing="1px"
      onClick={() => handlePageChange(href)} // Llama a la función para cambiar la página al hacer click
      _hover={isActive ? hoverStyles : {}}
      {...(isActive ? activeStyles : {})}
    >
      {children}
    </Button>
  );
}
