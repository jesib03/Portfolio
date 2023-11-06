// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'] });

import { extendTheme } from "@chakra-ui/react";

const colors = {
    pink: {
      50: "#fce4ec",
      100: "#FF0080",
      500: "##CE45A7", // Define el tono de rosa que desees
    },
    gray: {
      200: "#C7BFC8",
    },
  }
  export const theme = extendTheme({ colors })





function MyApp({ Component, pageProps }) {
  return (
    <>
    <style jsx global>
      {`
        :root {
          --font-rubik: ${rubik.style.fontFamily};
        }
      `}
    </style>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  </>
  )
}

export default MyApp;