import {
  Flex,
  Image,
  Text,
  IconButton,
  Grid,
  HStack,
  Button,
  ButtonGroup,
  Divider,
  AbsoluteCenter,
  Box,
} from "@chakra-ui/react";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <Grid
      bg="hsla(0,0%,99%,.3)"
      pl="100px"
      pr="100px"
      pt="1.75rem"
      pb="1.75rem"
    >
      <Flex width="100%" justifyContent="space-between" alignItems="center">
        <Grid gap="1.75rem">
          <Image src="./logoJess.png" w="80px" h="70px" />
          <Text fontSize="18px" width="80%" color="gray.500">
            I like building new things and creating designs and develop them
            into code. I worked on many projects as a developer using most
            recent Technologies.
          </Text>
          <HStack spacing="24px">
            <IconButton 
            as="a"
            color="#D52AA6" 
            href="https://github.com/jesib03"
            label="Github"
              target="_blank">
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton
            as='a'
              color="#D52AA6"
              href="https://www.facebook.com/profile.php?id=100008292441753"
              label="Facebook"
              target="_blank"
            >
              <FacebookIcon fontSize="large" />
            </IconButton>
            <IconButton
              as="a"
              color="#D52AA6"
              href="https://instagram.com/britojesi"
              label="Instagram"
              target="_blank"
            >
              <InstagramIcon fontSize="large" />
            </IconButton>
            <IconButton 
            as='a'
            color="#D52AA6" href="https://twitter.com/jesicabrito"
            label="X"
              target="_blank"
            >
              <TwitterIcon fontSize="large" />
            </IconButton>
            <IconButton
            as='a'
              color="#D52AA6"
              href="https://www.linkedin.com/in/jesica-brito-048b55254/"
              label="Linkedin"
              target="_blank"
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </HStack>
        </Grid>
        <Box>
          <ButtonGroup
            gap={20}
            width="90%"
            variant="solid"
            //   colorScheme="gray"
            fontSize="18px"
            fontWeight="500"
          >
            <Button as='a' letterSpacing=".1em" href='/#home'>Home</Button>
            <Button as='a' letterSpacing=".1em" href='/#about'>About</Button>
            <Button as='a' letterSpacing=".1em" href='/#skills'>Skills</Button>
            <Button as='a' letterSpacing=".1em" href='/#projects'>Projects</Button>
            <Button as='a' letterSpacing=".1em" href='/#contact'>Contact</Button>
          </ButtonGroup>
        </Box>
      </Flex>
      <Box position="relative" padding="10">
        <Divider orientation="horizontal" color="gray" />
        <AbsoluteCenter px="4" color="white" fontSize="18px">
          Design inspired by designer Alaa Abdelrasoul.
        </AbsoluteCenter>
      </Box>
    </Grid>
  );
}

export default Footer;
