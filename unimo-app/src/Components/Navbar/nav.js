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
          //   bg="red"
          justify="space-evenly"
          alignItems="center"
          h="100%"
          w="30%"
        >
          <Text mb="5" color="black">
            Create Unimo +
          </Text>
          <Image
            borderRadius="full"
            objectFit="cover"
            boxSize="70px"
            src={Profile}
            alt="profile"
          />
        </Flex>
      </Flex>
    </div>
  );
}

export default Nav;
