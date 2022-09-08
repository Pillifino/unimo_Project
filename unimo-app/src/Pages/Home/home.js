import React from 'react'

// Nav
import Nav from '../../Components/Navbar/nav'

import { Flex, Text } from "@chakra-ui/react"

function Home() {
  return (
    <div>
      <Nav/>
      <Flex
      bg="#E6E6E6"
      h="100vh"
      w="100vw"
      >
      <Text
      color="black"
      >Home</Text>
      </Flex>
    </div>
  )
}

export default Home
