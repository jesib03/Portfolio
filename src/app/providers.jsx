// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export function Providers({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }
  return (
    <CacheProvider>
      <ChakraProvider>
        <ThemeProvider
        attribute="class"
        >{children}</ThemeProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
