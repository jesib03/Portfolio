import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';

function Banda() {
  return (
    <Box position='relative'>
      <Box className="my-10 w-full -skew-y-2">
        <Flex
          bg="rgba(213,41,166,0.1)"
          justifyContent='space-evenly'
          alignItems="center"
          flexDirection="row"
          // paddingY="0.5rem"
          height="100px"
          margin="0" 
          
        >
          <Box style={{ opacity: 1, transform: 'none' }}>
            <Image
              alt="upwork"
              src="/full.png"
              width="250px"
              height="159px"
              loading="lazy"
            />
          </Box>
          <Box style={{ opacity: 1, transform: 'none' }}>
            <Image
              alt="fiverr"
              src="/frontend.png"
              width="250px"
              height="159px"
              loading="lazy"
            />
          </Box>
          <Box style={{ opacity: 1, transform: 'none' }}>
            <Image
              alt="behance"
              src="/back.png"
              width="250px"
              height="159px"
              loading="lazy"
            />
          </Box>
          <Box style={{ opacity: 1, transform: 'none' }}>
            <Image
              alt="dribble"
              src="/data.png"
              width="250px"
              height="159px"
              loading="lazy"
            />
          </Box>
        </Flex>
      </Box>
      <Box className="main-gradient left-0 top-1/2"></Box>
    </Box>
  );
}

export default Banda;
