import React from "react";
import { Box, Grid, Heading, Flex, Text, Image, Divider, IconButton, Button } from "@chakra-ui/react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

function About() {
  return (
    <Grid id="about" mt='5rem' mb='5rem' pl='100px' pr='100px'>
      <Heading color="#D52AA6" justify="center" textAlign="center" letterSpacing=".1em" >About</Heading>
      <Flex alignItems='center' mt='4'>
        <Box flex='1'>
          <Image alt="image"
          width="530"
          height="530"
          decoding="async"
          opacity="1"
           src="https://alaaweb.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabouttt.c4a84d46.png&w=828&q=75" />
        </Box>
        <Box flex='1' flexDirection='column' >
          <Text fontSize='lg' color='#242B33' fontWeight='400' pr='4' mb='6' className='leading-relaxed'>
          I am a front-end developer who constantly seeks out innovate solutions to everyday problem. 
          I'm a challenger by heart, and builder by nature. 
          I have spent time converting designs into pixel-perfect, performat, accesible and responsive applications/websites, with a variety of front-end development technologies, using Modern frameworks. 
          You can simple describe me as a front end developer addict.
          </Text>
          <Divider orientation='horizontal' color='white' width='80%' mb='6'/>
          <Text fontSize='lg' color='#242B33' fontWeight='400'>
            <IconButton aria-label="location" icon={<LocationOnIcon />} color="#D570A6" _hover={'bg-trasparent'}/>
          Argentina
          </Text>
          <Text fontSize='lg' color='#242B33' fontWeight='400'>
            <IconButton aria-label="phone" icon={<PhoneIcon />} color="#D570A6" _hover={'bg-trasparent'} />
            +542616159049
          </Text>
          <Text fontSize='lg' color='#242B33' fontWeight='400'>
            <IconButton aria-label="email" icon={<MailIcon />} color="#D570A6" _hover={'bg-trasparent'}  />
            jesib03@hotmail.com
          </Text>
          <Button
            className="bg-white p-7 mt-6 ml-4 border-0 rounded-[.75rem] font-semibold text-lg whitespace-nowrap items-center shadow-white transition-shadow hover:shadow-none"
            style={{ backdropFilter: "blur(4rem)", width: "200px" }}
            color="rgb(213 41 166 / 100%)"
            onClick={() => window.open('https://calendly.com/jesib03', '_blank')}
          >
            Hire Me
          </Button>
        </Box>
      </Flex>
    </Grid>
  );
}

export default About;