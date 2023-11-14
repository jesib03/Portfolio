import React from 'react'
import { Grid, Heading, Flex, Image } from '@chakra-ui/react'
import ProjectCard from './ProjectCard'

const projects = [{
  title: 'ProjUnity Website',
  technologies: ['React.js', 'Next.js', 'Javascript', 'Redux', 'Node.js', 'Express'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    github: 'https://github.com/johndoe/project-name',
    deploy: 'https://project-name.com'
},
{
  title: 'Project Title',
  technologies: ['React', 'Nodejs', 'Express'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    github: 'https://github.com/johndoe/project-name',
    deploy: 'https://project-name.com'
},
{
  title: 'Project Title',
  technologies: ['React', 'Nodejs', 'Express'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    github: 'https://github.com/johndoe/project-name',
    deploy: 'https://project-name.com'
}]


function Projects() {
  return (
    <Grid id="projects" pl='100px' pr='100px' mt="4rem" mb='5rem'
    >
      <Flex alignItems="center" position="relative" justifyContent='center'>
      <Heading color="#D52AA6" textAlign="center" letterSpacing=".1em" justifyContent='center'>
        Projects
      </Heading>
      <Image
      src='https://alaaweb.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservies.35e1db5e.png&w=1080&q=75'
      alt='projects'
      width='250px'
      height='auto'
      position='absolute'
      left='0'
      top="-6rem"
          opacity="1"
          transform="none"
      />
      </Flex>
      <ProjectCard projects={projects} />
      </Grid>
  )
}

export default Projects