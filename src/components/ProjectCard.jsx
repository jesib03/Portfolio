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
  IconButton
} from "@chakra-ui/react";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function ProjectCard({projects}) {
  return (
    <VStack mb="5rem" spacing={12} position="relative" justifyContent="center">
   
        {projects.map((project, index) => (
      <Card
      key={index}
        // position="absolute"
        left="2rem"
        top="8rem"
        w="50em"
        h="20em"
        variant="elevetad"
        backgroundColor="hsla(0,0%,99%,.7)"
        paddingLeft="1.5rem"
        paddingRight="1.5rem"
        paddingTop="1rem"
        paddingBottom="1rem"
      >
        <CardHeader>
          <Heading size="lg" textAlign="center">
            {project.title}
          </Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <HStack justify="center">
              <Badge
                variant="solid"
                bgGradient="linear(-200deg, #244081c7, #ce6eae, #ba2f9c 29%, rgba(20,160,160,.8) 69.58%, #752482 82.07%, #b31c58 95.62%)"
                fontSize="0.8em"
              >
                React.js
              </Badge>
              <Badge
                variant="solid"
                bgGradient="linear(-200deg, #244081c7, #ce6eae, #ba2f9c 29%, rgba(20,160,160,.8) 69.58%, #752482 82.07%, #b31c58 95.62%)"
                fontSize="0.8em"
              >
                Next.js
              </Badge>
              <Badge
                variant="solid"
                bgGradient="linear(-200deg, #244081c7, #ce6eae, #ba2f9c 29%, rgba(20,160,160,.8) 69.58%, #752482 82.07%, #b31c58 95.62%)"
                fontSize="0.8em"
              >
                Javascript
              </Badge>
              <Badge
                variant="solid"
                bgGradient="linear(-200deg, #244081c7, #ce6eae, #ba2f9c 29%, rgba(20,160,160,.8) 69.58%, #752482 82.07%, #b31c58 95.62%)"
                fontSize="0.8em"
              >
                REDUX
              </Badge>
              <Badge
                variant="solid"
                bgGradient="linear(-200deg, #244081c7, #ce6eae, #ba2f9c 29%, rgba(20,160,160,.8) 69.58%, #752482 82.07%, #b31c58 95.62%)"
                fontSize="0.8em"
              >
                Express.js
              </Badge>
              <Badge
                variant="solid"
                bgGradient="linear(-200deg, #244081c7, #ce6eae, #ba2f9c 29%, rgba(20,160,160,.8) 69.58%, #752482 82.07%, #b31c58 95.62%)"
                fontSize="0.8em"
              >
                node.js
              </Badge>
            </HStack>
            <Box>
              <Heading
                as="h5"
                size="sm"
                noOfLines={2}
                textAlign="center"
                color="gray"
                _hover={{
                  noOfLines: "unset", // Hace que el texto se muestre completo al pasar el mouse
                }}
                pl="6"
                pr="6"
              >
                My experience in web application development and my ability to
                work in agile environments have allowed me to acquire technical
                skills in JavaScript, React, Redux, Express, Node, PostgreSQL,
                and more. I have worked on both individual and team projects,
                contributing to the creation of robust and visually appealing
                technical solutions.
              </Heading>
            </Box>
          </Stack>
        </CardBody>
        <Flex justify='center' alignItems='center'>
          <IconButton
            aria-label="Go to project"
            icon={<GitHubIcon fontSize='large'/>}
            onClick={() => window.open(project.link)}
            mr='2'
          />
          <IconButton
            aria-label="Go to project"
            icon={<OpenInNewIcon fontSize='large' />}
            color="#D570A6"
            onClick={() => window.open(project.link)}
          />
        </Flex>
        <Image
        src="https://fffuel.co/images/ssshape/svg-shape-11.svg"
        position="absolute"
        zIndex="-10"
        height="300px"
        width="300px"
        WebkitFilter="blur(150px)"
        right="-40"
        top="40%"
        ></Image>
      </Card>
      ))}
    </VStack>
  );
}

export default ProjectCard;
