import React from 'react';

// Nav
import Nav from '../../Components/Navbar/nav';

import { Flex, Text, Input } from '@chakra-ui/react';

function Home() {
  return (
    <div>
      <Nav />
      <Flex justify="center"
      bg="bg"
      >
        <Flex bg="bg" h="100vh" w="85%" flexDirection="column">
          <Flex
            // bg="green"
            w="100%"
            h="10%"
            align="center"
            justify="space-between"
          >
            <Text color="black" fontSize="1.5em">
              Explore
            </Text>
            <Input w="50%" placeholder="Search" color="White" size="md" variant="Filled" focusBorderColor='black'/>
          </Flex>
          <Flex 
          // bg="orange" 
          w="100%" 
          h="90%">
            {/*  */}
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}

export default Home;
