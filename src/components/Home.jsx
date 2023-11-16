import {
    Flex,
    Button,
    Image,
    Box,
    Text,
    Grid,
  } from "@chakra-ui/react";
  import SocialButtonsGroup from "../components/socialButtosGroup";
import Link from "next/link";

function Home() {
  return (
    <Grid>
         <Flex
          height="100vh"
          alignItems="center"
          justifyContent="center"
          bgClip="text"
          flexDir="column"
          textAlign="left"
          direction={{ base: "column", md: "row" }} // Controla la dirección de los elementos en base al tamaño de la pantalla
          spacing={8} // Espacio entre los elementos
          pl="100px"
          pr="100px"
          pt="1rem"
          mt={2}
        >
          <Box flex="1">
            <Grid gap={4}>
              <Text
                fontSize="20px"
                fontWeight="bold"
                bgGradient="linear(-200deg, #244081c7, #ce6eae, #ba2f9c 29%, rgba(20,160,160,.8) 69.58%, #752482 82.07%, #b31c58 95.62%)"
                bgClip="text"
                letterSpacing=".1em"
                color="transparent"
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
                bgGradient="linear(-200deg, #244081c7, #ce6eae, #ba2f9c 29%, rgba(20,160,160,.8) 69.58%, #752482 82.07%, #b31c58 95.62%)"
                bgClip="text"
                fontSize="5xl"
                fontWeight="bold"
              >
                Frontend Developer
              </Text>
              <Text
                fontSize="xl"
                color="white" // Color blanco
                mt="4" // Margen superior
                fontWeight="500"
              >
                I like building new things and creating impressive designs and
                develop them into code. I worked on many projects as a developer
                using the most recent technologies.
              </Text>
            </Grid>
            <Flex mt="2rem" justifyContent="center" alignItems="center" gap="9">
              <Button
                className="bg-white p-[1.75rem] border-0 rounded-[.75rem] font-semibold text-lg uppercase whitespace-nowrap flex justify-center items-center shadow-white transition-shadow hover:shadow-none"
                style={{ backdropFilter: "blur(4rem)", width: "14rem" }}
                color="rgb(213 41 166 / 100%)"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1iTIdBXZ0RbpZ7QSomwbOXoa9K2shfquI/view?usp=sharing",
                    "_blank"
                  )
                }
                download="Jesi Brito CV"
                target="_blank"
              >
                Download CV
              </Button>
              <Link href='#contact'>
              <Button
                className="whitespace-nowrap p-[1.75rem] rounded-[.75rem] font-bold text-lg border-solid border-[1px] border-[#FFFFFF] bg-transparent text-center backdrop-blur-[4rem] w-[14rem] text-[#FFFFFF] shadow-white transition-shadow hover:bg-transparent hover:shadow-none"               
              >
                Contact me
              </Button>
              </Link>
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
        <Box mt="-6em" ml="16" pl="90px" pr="100px">
          <SocialButtonsGroup />
        </Box>
    </Grid>
  )
}

export default Home