import React from "react";
import { Grid, Heading, Flex, Image } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "ProjUnity Website",
    technologies: [
      "Javascript",
      "React.js",
      "Next.js",
      "ChakraUI",
      "NextUI",
      "Redux",
      "Node.js",
      "Express",
    ],
    description:
      "I participated as a Frontend Developer in a group project. I contributed to the development of an administration panel that streamlines the management of projects and users, with detailed reports on sales, ratings, and user/project administration.",
    github: "https://github.com/jesib03/projunity",
    deploy: "https://project-name.com",
    image: "/projunity.png",
  },
  {
    title: '"DOGS" Project',
    technologies: ["React", "CSS", "Redux", "Nodejs", "Express", "PostgreSQL"],
    description:
      "The 'Dogs' project is a web platform that allows you to explore detailed information about different dog breeds and share pictures of your favorite pets. The project's mission is to promote knowledge about canine breeds, foster love for dogs, and facilitate learning.",
    github: "https://github.com/jesib03/DogsProject",
    deploy: "https://project-name.com",
    image: "/dogs.png",
  },
  {
    title: '"Rick and Morty" Project',
    technologies: ["React", "Redux", "Nodejs", "Express", "CSS"],
    description:
      'I developed an interactive website inspired by "Rick and Morty" and implemented key features such as login, character exploration, and favorites management.',
    github: "https://github.com/jesib03/Integrador-RickandMorty",
    deploy: "https://project-name.com",
    image: "/rickandmorty.png",
  },
];

function Projects() {
  return (
    <Grid id="projects" pl="6.25rem" pr="6.25rem" mt="4rem" mb="5rem">
      <Flex alignItems="center" position="relative" justifyContent="center">
        <Heading
          color="#D52AA6"
          textAlign="center"
          letterSpacing=".1em"
          justifyContent="center"
        >
          Projects
        </Heading>
        <Image
          src="https://alaaweb.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservies.35e1db5e.png&w=1080&q=75"
          alt="projects"
          width="250px"
          height="auto"
          position="absolute"
          left="0"
          top="-6rem"
          opacity="1"
          transform="none"
        />
      </Flex>
      <ProjectCard projects={projects} />
    </Grid>
  );
}

export default Projects;
