import React from "react";
import {
  Heading,
  Grid,
  Flex,
  Image,
  SimpleGrid,
  Circle,
  Tooltip,
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
        <Tooltip hasArrow label='HTML' bgColor='#D570A6' placement="top" fontWeight='700'>
        <Image
          src="https://alaaweb.vercel.app/_next/static/media/html.485a9935.svg"
          alt="html"
        />
        </Tooltip>
        <Tooltip hasArrow label='CSS' bgColor='#D570A6' placement="top" fontWeight='700'>
        <Image
          src="https://alaaweb.vercel.app/_next/static/media/css.0279b945.svg"
          alt="css"
        />
        </Tooltip>
        <Tooltip hasArrow label='JAVASCRIPT' bgColor='#D570A6' placement="top" fontWeight='700'>
        <Image
          src="https://alaaweb.vercel.app/_next/static/media/js.e3d0a4f7.svg"
          alt="javascript"
        />
        </Tooltip>
        <Tooltip hasArrow label='REACT' bgColor='#D570A6' placement="top" fontWeight='700'>
        <Image
          src="https://alaaweb.vercel.app/_next/static/media/react2.a1ee3299.svg"
          alt="react"
        />
        </Tooltip>
        <Tooltip hasArrow label='REDUX' bgColor='#D570A6' placement="top" fontWeight='700'>
        <Image
          src="https://alaaweb.vercel.app/_next/static/media/redux.6b8e529c.svg"
          alt="redux"
        />
        </Tooltip>
        <Tooltip hasArrow label='NEXT.JS' bgColor='#D570A6' placement="top" fontWeight='700'>
        <Image
          src="https://alaaweb.vercel.app/_next/static/media/nextjs.34b739d6.svg"
          alt="next"
        />
        </Tooltip>
        <Tooltip hasArrow label='FIGMA' bgColor='#D570A6' placement="top" fontWeight='700'>
          <Image
          src="https://alaaweb.vercel.app/_next/static/media/figma.e2e21306.svg"
          alt="figma"
        />
        </Tooltip>
        <Tooltip hasArrow label='TaiwlindCSS' bgColor='#D570A6' placement="top" fontWeight='700'>
        <Image
          src="https://alaaweb.vercel.app/_next/static/media/tcss.18c8f69f.svg"
          alt="taiwlind"
        />
        </Tooltip>
        <Tooltip hasArrow label='MUI' bgColor='#D570A6' placement="top" fontWeight='700'>
        <Image
          src="https://alaaweb.vercel.app/_next/static/media/mui2.2ad676c9.svg"
          alt="materialUI"
        />
        </Tooltip>
        <Tooltip hasArrow label='ChakraUI' bgColor='#D570A6' placement="top" fontWeight='700'>
         <Circle
          size="69%"
          bg="rgba(221, 196, 203, 0.38)"
          boxShadow='10px 0px 10px 0px rgba(88, 81, 80, 0.4)'
          mt="4"
          position="relative"
        >
          <Image src="https://profilinator.rishav.dev/skills-assets/chakraui.png" p='2'  alt='chakraui'/>
        </Circle>
        </Tooltip>
        <Tooltip hasArrow label='ChartJS' bgColor='#D570A6' placement="top" fontWeight='700'>
        <Circle
          size="69%"
          bg="rgba(221, 196, 203, 0.38)"
          boxShadow='10px 0px 10px 0px rgba(88, 81, 80, 0.4)'
          mt="4"
          position="relative"
          
        >
          <Image src="https://profilinator.rishav.dev/skills-assets/logo-title.svg" p='2' alt='chartjs' />
        </Circle>
        </Tooltip>
        <Tooltip hasArrow label='GIT' bgColor='#D570A6' placement="top" fontWeight='700'>
        <Image
          src="https://alaaweb.vercel.app/_next/static/media/git.37654ac9.svg"
          alt="git"
        />
        </Tooltip>
        <Tooltip hasArrow label='GITHUB' bgColor='#D570A6' placement="top" fontWeight='700'>
        <Image
          src="https://alaaweb.vercel.app/_next/static/media/github.882ca645.svg"
          alt="github"
        />
        </Tooltip>
        <Tooltip hasArrow label='NODE.JS' bgColor='#D570A6' placement="top" fontWeight='700'>
        <Circle
          size="69%"
          bg="rgba(221, 196, 203, 0.38)"
          boxShadow='10px 0px 10px 0px rgba(88, 81, 80, 0.4)'
          mt="4"
          position="relative"
        >
          <Image src="/node.png" />
        </Circle>
       </Tooltip>
       <Tooltip hasArrow label='EXPRESS' bgColor='#D570A6' placement="top" fontWeight='700'>
        <Circle
          size="69%"
          bg="rgba(221, 196, 203, 0.38)"
          boxShadow='10px 0px 10px 0px rgba(88, 81, 80, 0.4)'
          mt="4"
          position="relative"
        >
          <Image src="/express2.png" />
        </Circle>
       </Tooltip>
       <Tooltip hasArrow label='PostgreSQL' bgColor='#D570A6' placement="top" fontWeight='700'>
        <Circle
          size="69%"
          bg="rgba(221, 196, 203, 0.38)"
          boxShadow='10px 0px 10px 0px rgba(88, 81, 80, 0.4)'
          mt="4"
          position="relative"
        >
          <Image src="/postg.png" alt='postgresql'/>
        </Circle>
       </Tooltip>
      </SimpleGrid>
    </Grid>
  );
}

export default Skills;
