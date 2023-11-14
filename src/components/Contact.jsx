import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Grid,
  Heading,
  Input,
  Textarea,
  Flex,
  Image,
  Button,
  Box,
} from "@chakra-ui/react";

function Contact() {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  return (
    <Grid
      id="skills"
      pl="100px"
      pr="100px"
      mt="6"
      mb="5rem"
      scroll-margin-top= '6rem'
      
    >
      <Heading
        color="#D52AA6"
        justify="center"
        textAlign="center"
        letterSpacing=".1em"
      >
        Contact
      </Heading>
      <Flex
        padding="2.5rem"
        mt="2.5rem"
        ml='auto'
        mr='auto'
        bg="hsla(0,0%,99%,.2)"
        borderRadius="0.75rem"
        alignItems="flex-start"
        justifyContent="space-between"
        position='relative'
        width='100%'
       
      >
        <Box
         width="50%"
         mt="-1.75rem"
         maxWidth='350px'
         ml='auto'
         mr='auto'
        >

        <Image
          src="https://alaaweb.vercel.app/_next/static/media/contactImgs.2ecc8e0e.svg"
         
        />
        </Box>
        <FormControl width='50%'>
          <FormLabel color="white" mb='3' fontWeight='bold' fontSize='xl' >User name</FormLabel>
          <Input placeholder="Enter your name" bg='#f5f5f5' fontWeight='semibold' p='0.75rem' />
          <FormLabel color="white" mb='3' mt='2.5rem' fontWeight='bold' fontSize='xl' >Email</FormLabel>
          <Input
            type="email"
            placeholder="Enter your email"
            value={input}
            onChange={handleInputChange}
            bg='#f5f5f5' 
            fontWeight='semibold'
            p='0.75rem'
          />
          {!isError ? (
            <FormHelperText>We'll never share your email.</FormHelperText>
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}

          <FormLabel color="white" mb='3' mt='2.5rem' fontWeight='bold' fontSize='xl' >Message</FormLabel>
          <Textarea placeholder="Enter your message" bg='#f5f5f5' fontWeight='semibold' h='10rem'  p='0.75rem' ></Textarea>
          <Box mt='6'>
          <Button
            className="bg-white p-6 mt-6 ml-4 border-0 rounded-[.75rem] font-semibold text-lg whitespace-nowrap items-center transition-shadow hover:shadow-none"
            style={{ backdropFilter: "blur(4rem)", width: "150px" }}
            color="rgb(213 41 166 / 100%)"
            target='_blank'
          >
            Send
          </Button>

          </Box>
        </FormControl>
      </Flex>
      <Image
        src="https://alaaweb.vercel.app/_next/static/media/contactGirl.d385586e.svg"
        w="220px"
        right="24"
        top="228em"
        position='absolute'
      />
    </Grid>
  );
}

export default Contact;
