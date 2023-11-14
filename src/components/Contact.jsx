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
} from "@chakra-ui/react";

function Contact() {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  return (
    <Grid
      id="skills"
     pl='100px'
     pr='100px'
      mt="6"
      mb="6"
      justifyContent="center"
      alignItems="center"
    >
      <Heading color="#D52AA6" justify="center" textAlign="center" letterSpacing=".1em">
        Contact
      </Heading>
      <Flex p='2.5rem' mt='6' bg='hsla(0,0%,99%,.2)' >
      <Image 
      src='https://alaaweb.vercel.app/_next/static/media/contactImgs.2ecc8e0e.svg'
      w='50%'
      mt='-1.75rem'
      />
      <FormControl>
        <FormLabel color='white'>User name</FormLabel>
        <Input placeholder='Enter your name' />
        <FormLabel color='white'>Email</FormLabel>
        <Input
          type='email'
          placeholder='Enter your email'
          value={input}
          onChange={handleInputChange}
        />
        {!isError ? (
          <FormHelperText>
            We'll never share your email.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}

        <FormLabel color='white' >Message</FormLabel>
        <Textarea placeholder='Enter your message'></Textarea>
      </FormControl>
      </Flex>
    </Grid>
  );
}

export default Contact;
