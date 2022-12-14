import React from 'react';

// // Components
// import Cards from '../../Components/unimoCards/card';

// Array
import images from '../../Images';

// Nav
import Nav from '../../Components/Navbar/nav';

import { Flex, Text, Input, Image } from '@chakra-ui/react';

function Home() {
  return (
    <div>
      <Nav />
      <Flex 
      justify="center" 
      bg="bg"
      h={["1050vh","1050vh","300vh","300vh",]}
      >
        <Flex 
        bg="bg" 
        h="100%"
        w="85%" 
        flexDirection="column">
          <Flex
            // bg="green"
            w="100%"
            h={["1%","1%","5%","5%",]}
            align="center"
            justify="space-between"
          >
            <Text color="black" fontSize="1.5em">
              Explore
            </Text>
            <Input
              w="50%"
              placeholder="Search"
              color="White"
              size="md"
              variant="Filled"
              focusBorderColor="black"
            />
          </Flex>
          <Flex
            // bg="orange"
            mb="20"
            w="100%"
            h={["100%","100%","100%","100%",]}
            justify="space-evenly"
            align="center"
            alignItems="center"
            flexWrap="wrap"
          >
            {images.map((item, index) => {
              return (
                <Flex
                  w={["80vw","60vw","20vw","20vw",]}
                  h={["60vh","60vh","30vh","30vh",]}
                  minWidth={["430px","430px","200px","200px",]}
                  maxWidth={["100%","100%","22%","200px",]}
                  justify="center"
                  alignItems="center"
                  boxShadow="xl"
                  border="solid gray .5px"
                  borderRadius="5px"
                  flexDirection="column"
                >
                  <Image
                    w="90%"
                    h="85%"
                    mt="1.5"
                    minWidth={["190px","190px","160px","160px",]}
                    // maxWidth="160px"
                    borderRadius="2px"
                    key={index}
                    src={require(`../../Assets/Images/` + item.image + `.jpg`)}
                    alt={item.title}
                    boxShadow="lg"
                  />
                  <Text 
                  pt={["4","4","2","2",]} 
                  align="center" 
                  fontSize={["1.5em","1.7em",".8em",".8em",]}
                  >
                    Unimo Name
                    </Text>
                </Flex>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}

export default Home;
