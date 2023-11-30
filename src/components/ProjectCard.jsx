import {
  CardBody,
  VStack,
  Card,
  CardHeader,
  Heading,
  Image,
  HStack,
  Badge,
  Stack,
  Box,
  StackDivider,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { motion } from "framer-motion";

function ProjectCard({ projects }) {
  return (
    <VStack mb="3rem" spacing={12} position="relative" justifyContent="evenly">
      {projects.map((project, index) => (
        <Card
          key={index}
          // position="absolute"
          left="2rem"
          top="6rem"
          w="50em"
          h="20em"
          variant="eleveted"
          backgroundColor="hsla(0,0%,99%,.7)"
          paddingLeft="1.5rem"
          paddingRight="1.5rem"
          paddingTop="0.5rem"
          paddingBottom="1rem"
        >
          <CardHeader>
            <Heading size="lg" textAlign="center" mb="-2">
              {project.title}
            </Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <HStack justify="center">
                {project.technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="solid"
                    bg="rgba(20,160,160,.8)"
                    fontSize="0.8em"
                  >
                    {tech}
                  </Badge>
                ))}
              </HStack>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Box>
                  <Heading
                    as="h5"
                    fontSize="18px"
                    noOfLines={[1, 2]}
                    textAlign="center"
                    color="#99A2A5"
                    fontWeight="500"
                    width="80%"
                    marginX="auto"
                    _hover={{
                      WebkitLineClamp: "unset",
                    }}
                  >
                    {project.description}
                  </Heading>
                </Box>
              </motion.div>
            </Stack>
          </CardBody>
          <Flex justify="center" alignItems="center">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconButton
                aria-label="Go to project"
                icon={<GitHubIcon fontSize="large" />}
                onClick={() => window.open(project.github)}
                mr="2"
                _hover={{
                  bgColor: "transparent",
                }}
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconButton
                aria-label="Go to project"
                icon={<OpenInNewIcon fontSize="large" />}
                color="#D570A6"
                onClick={() => window.open(project.deploy)}
                _hover={{
                  bgColor: "transparent",
                }}
              />
            </motion.div>
          </Flex>
          <Image
            src="https://fffuel.co/images/ssshape/svg-shape-11.svg"
            position="absolute"
            zIndex="-10"
            height="300px"
            width="300px"
            right="-40"
            top="40%"
          ></Image>
        </Card>
      ))}
    </VStack>
  );
}

export default ProjectCard;
