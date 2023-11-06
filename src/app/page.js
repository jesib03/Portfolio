'use client'
import { Flex, Button, Image, Box, Text, Grid } from "@chakra-ui/react";
import SocialButtonsGroup from "../components/socialButtosGroup"
import About from "../components/About"

function Home() {
  return (
    <Grid id="" >
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      bgClip="text"
      flexDir="column"
      textAlign="left"
      direction={{ base: "column", md: "row" }} // Controla la dirección de los elementos en base al tamaño de la pantalla
      spacing={8} // Espacio entre los elementos
      
    >
      <Box flex="1">
        <Box>
          <Text
            className="bg-clip-text text-transparent bg-gradient-to-b from-[#B12A9C] to-[#14A0A0] text-[24px] font-bold"
          >
            Hello There!
          </Text>
          <Text
            fontSize="4xl" // Tamaño de fuente más grande
            color="white" // Color blanco
          >
            I'm Jessica Brito
          </Text>
          <Text
            bgGradient="linear(to-r, #B12A9C, #14A0A0)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="bold"
          >
            Frontend Developer
          </Text>
          <Text
            fontSize="lg" // Tamaño de fuente más pequeño
            color="white" // Color blanco
            mt="4" // Margen superior
            fontWeight="500"
          >
            I like building new things and creating impressive designs and
            develop them into code. I worked on many projects as a developer
            using the most recent technologies.
          </Text>
        </Box>
        <Flex mt="4" justifyContent="center" alignItems="center" gap="9">
          <Button
            className="bg-white p-8 border-0 rounded-[.75rem] font-semibold text-lg uppercase whitespace-nowrap flex justify-center items-center shadow-white transition-shadow hover:shadow-none"
            style={{ backdropFilter: "blur(4rem)", width: "200px" }}
            color="rgb(213 41 166 / 100%)"
            href='https://drive.google.com/file/d/1iTIdBXZ0RbpZ7QSomwbOXoa9K2shfquI/view?usp=sharing'
            download='Jesi Brito CV'
            target='_blank'
          >
            Download CV
          </Button>
          <Button className="whitespace-nowrap rounded-[.75rem] font-bold text-lg border-solid border-[1px] border-[#FFFFFF] bg-transparent text-center backdrop-blur-[4rem] w-[200px] p-8 text-[#FFFFFF] shadow-white transition-shadow hover:bg-transparent hover:shadow-none"
          onClick={() => {
            window.open("mailto:jesib03@hotmail.com?subject=Consulta&body=Hola! Estuve viendo tu Portfolio y quería comentarte que", "_blank");
          }}
          >
            Contact me
          </Button>
          <Image
            alt="arrow"
            loading="lazy"
            width="100px" // Establece el ancho deseado
            height="78px" // Establece la altura deseada
            decoding="async"
            data-nimg="1"
            className="w-[60px] md:w-[100px]" // Establece las clases de estilo personalizado
            style={{ color: "transparent" }}
            src="https://alaaweb.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farrow.49f542fe.png&w=256&q=75"
          />
        </Flex>
      </Box>
      <Box flex="">
        <Image
          alt="image"
          fetchpriority="high"
          loading="eager"
          width="530"
          height="530"
          decoding="async"
          style={{ color: "transparent" }}
          // srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSaly-1.aa368516.png&w=640&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSaly-1.aa368516.png&w=1080&q=75 2x"
          src="https://alaaweb.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSaly-1.aa368516.png&w=1080&q=75"
        />
      </Box>
    </Flex>
      <Box mt='-14' ml="16">
        <SocialButtonsGroup />
      </Box>
      <Box mt="6em">
        <Link href="/#about">
        <About />
        </Link>
      </Box>
    </Grid>
  );
}

export default Home;
