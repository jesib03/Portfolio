import React, { useState, useRef } from "react";
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
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError(false); // Reset error when user starts typing
  };
  
  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    setEmailError(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue));
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setMessageError(false); // Reset error when user starts typing
  };

  const isFormValid = () => {
    return name.trim() && email.trim() && !emailError && message.trim();
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

     // Validation
     if (!name.trim()) {
      setNameError(true);
      return;
    }

    if (!email.trim() || emailError) {
      setEmailError(true);
      return;
    }

    if (!message.trim()) {
      setMessageError(true);
      return;
    }
    emailjs
      .sendForm(
        "service_hkv2x8c",
        "template_d1s9fk8",
        form.current,
        "-qyyyKoyZoNPSrtNk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Grid
      id="skills"
      pl="100px"
      pr="100px"
      mt="6"
      mb="5rem"
      scroll-margin-top="6rem"
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
        ml="auto"
        mr="auto"
        bg="hsla(0,0%,99%,.2)"
        borderRadius="0.75rem"
        alignItems="flex-start"
        justifyContent="space-between"
        position="relative"
        width="100%"
      >
        <Box width="50%" mt="-1.75rem" maxWidth="350px" ml="auto" mr="auto">
          <Image src="https://alaaweb.vercel.app/_next/static/media/contactImgs.2ecc8e0e.svg" />
        </Box>
        <FormControl width="50%" ref={form} onSubmit={sendEmail} isInvalid={nameError || emailError || messageError}>
          <FormLabel color="white" mb="3" fontWeight="bold" fontSize="xl">
            User name
          </FormLabel>
          <Input
            placeholder="Enter your name"
            bg="#f5f5f5"
            fontWeight="semibold"
            p="0.75rem"
            name="user_name"
            value={name}
            onChange={handleNameChange}
          />
          {!name || nameError ? (
            <FormErrorMessage>Name is required.</FormErrorMessage>
            ) : (
              <FormHelperText>✔️</FormHelperText>
            )}
          <FormLabel
            color="white"
            mb="3"
            mt="2.5rem"
            fontWeight="bold"
            fontSize="xl"
          >
            Email
          </FormLabel>
          <Input
            name="user_email"
            type="email"
            placeholder="Enter your email"
            bg="#f5f5f5"
            fontWeight="semibold"
            p="0.75rem"
            value={email}
            onChange={handleEmailChange}
            
          />
          {!email || emailError ? (
            <FormErrorMessage>Email is not valid.</FormErrorMessage>
            ) : (
            <FormHelperText>We'll never share your email.</FormHelperText>
          )}

          <FormLabel
            color="white"
            mb="3"
            mt="2.5rem"
            fontWeight="bold"
            fontSize="xl"
          >
            Message
          </FormLabel>
          <Textarea
            placeholder="Enter your message"
            bg="#f5f5f5"
            fontWeight="semibold"
            h="10rem"
            p="0.75rem"
            name="message"
            value={message}
            onChange={handleMessageChange}
          ></Textarea>
          {! message || messageError ? (
            <FormErrorMessage>Message is required.</FormErrorMessage>
            ) : (
              <FormHelperText>Thank you for your message.</FormHelperText>
            )}
          <Box mt="6">
            <Button
              className="bg-white p-6 mt-6 ml-4 border-0 rounded-[.75rem] font-semibold text-lg whitespace-nowrap items-center transition-shadow hover:shadow-none"
              style={{ backdropFilter: "blur(4rem)", width: "150px" }}
              color="rgb(213 41 166 / 100%)"
              target="_blank"
              type="submit"
              value="Send"
              disabled={!isFormValid()}
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
        position="absolute"
      />
    </Grid>
  );
}

export default Contact;
