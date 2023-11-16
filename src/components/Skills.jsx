import React from "react";
import {
  Heading,
  Grid,
  Flex,
  Image,
  SimpleGrid,
  Circle,
  Avatar,
} from "@chakra-ui/react";

function Skills() {
  return (
    <Grid id="skills" pl='100px' pr='100px' mt="5rem" mb='5rem'>
      <Flex justifyContent="center" alignItems="center" position="relative">
        <Heading
          color="#D52AA6"
          justify="center"
          textAlign="center"
          letterSpacing=".1em"
        >
          Skills
        </Heading>
        <Image
          src="https://alaaweb.vercel.app/_next/static/media/skills.99d11128.svg"
          alt="Skills"
          width="250"
          height="250"
          position="absolute"
          right="0"
          top="-6rem"
          opacity="1"
          transform="none"
        />
      </Flex>
      <SimpleGrid
        minChildWidth="120px"
        spacing="40px"
        mt="6em"
        ml="4em"
        mr="4em"
        justify='center'
      >
        <Image
          src="https://alaaweb.vercel.app/_next/static/media/html.485a9935.svg"
          alt="html"
        />
        <Image
          src="https://alaaweb.vercel.app/_next/static/media/css.0279b945.svg"
          alt="css"
        />
        <Image
          src="https://alaaweb.vercel.app/_next/static/media/js.e3d0a4f7.svg"
          alt="javascript"
        />
        <Image
          src="https://alaaweb.vercel.app/_next/static/media/react2.a1ee3299.svg"
          alt="react"
        />
        <Image
          src="https://alaaweb.vercel.app/_next/static/media/redux.6b8e529c.svg"
          alt="redux"
        />
        <Image
          src="https://alaaweb.vercel.app/_next/static/media/nextjs.34b739d6.svg"
          alt="next"
        />
          <Image
          src="https://alaaweb.vercel.app/_next/static/media/figma.e2e21306.svg"
          alt="figma"
        />
        <Image
          src="https://alaaweb.vercel.app/_next/static/media/tcss.18c8f69f.svg"
          alt="taiwlind"
        />
        <Image
          src="https://alaaweb.vercel.app/_next/static/media/mui2.2ad676c9.svg"
          alt="materialUI"
        />
         <Circle
          size="90px"
          bg="rgba(221, 196, 203, 0.5)"
          boxShadow="5px 10px 20px 2px #687170"
          mt="4"
          position="relative"
        >
          <Image src="https://profilinator.rishav.dev/skills-assets/chakraui.png" p='2'  alt='chakraui'/>
        </Circle>
        <Circle
          size="5.3rem"
          bg="rgba(221, 196, 203, 0.5)"
          border="2px solid transparent"
          boxShadow={{
            base: "0 3px 6px 0 rgba(0, 0, 0, 0.1)",
            md: "0 5px 8px -2px rgba(0, 0, 0, 0.2)",
            lg: "0 8px 10px -4px rgba(0, 0, 0, 0.2)",
            xl: "0 10px 14px -6px rgba(0, 0, 0, 0.25)",
          }}
          mt="4"
          position="relative"
        >
          <Image src="https://profilinator.rishav.dev/skills-assets/logo-title.svg" p='2' alt='chartjs' />
        </Circle>
        <Image
          src="https://alaaweb.vercel.app/_next/static/media/git.37654ac9.svg"
          alt="git"
        />
        <Image
          src="https://alaaweb.vercel.app/_next/static/media/github.882ca645.svg"
          alt="github"
        />

        <Circle
          size="90px"
          bg="rgba(221, 196, 203, 0.5)"
          boxShadow="5px 10px 20px 2px #687170"
          mt="4"
          position="relative"
        >
          <Image src="/node.png" />
        </Circle>
       
        <Circle
          size="90px"
          bg="rgba(221, 196, 203, 0.5)"
          boxShadow="5px 10px 20px 2px #687170"
          mt="4"
          position="relative"
        >
          <Image src="/express2.png" />
        </Circle>
        <Circle
          size="90px"
          bg="rgba(221, 196, 203, 0.5)"
          boxShadow="5px 10px 20px 2px #687170"
          mt="4"
          position="relative"
        >
          <Image src="/postg.png" alt='postgresql'/>
        </Circle>
      </SimpleGrid>
    </Grid>
  );
}

export default Skills;
