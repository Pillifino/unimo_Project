import React from 'react';

import { Flex, Heading, Text, Image } from '@chakra-ui/react';
import Profile from '../../Assets/Images/Profile.jpg';

function Nav() {
  return (
    <div>
      <Flex
        bg="#E6E6E6"
        // bg="green"
        h="10vh"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading size="3xl">Unimo</Heading>
        <Flex
          // bg="red"
          justify={['end', 'end', 'space-between', 'space-between']}
          alignItems="center"
          h="100%"
          w={['60%', '40%', '35%', '35%']}
          pr="5"
        >
          <Text
            // bg="white"
            h="100%"
            w={['20%', '30%', '70%', '65%']}
            alignItems="center"
            justifyContent={['center', 'center', 'flex-end', 'flex-end']}
            pb="5"
            pr="5"
            color="black"
            display={['none', 'none', 'flex', 'flex']}
          >
            Create Unimo +
          </Text>
          <Image
            minWidth="50px"
            borderRadius="full"
            objectFit="cover"
            boxSize={['50px', '70px', '70px', '70px']}
            src={Profile}
            alt="profile"
          />
        </Flex>
      </Flex>
    </div>
  );
}

export default Nav;
