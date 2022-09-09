import { Flex, Image } from '@chakra-ui/react';
import React from 'react';

// Array
import images from '../../Images';

function Cards() {
  return (
    <div>
      {images.map((item, index) => {
        return (
          <Flex
            bg="bgAccent"
            w="22vw"
            h="30vh"
            minWidth="200px"
            boxShadow="lg"
            borderRadius="5px"
          >
            <Image
              key={index}
              src={require(`../../Assets/Images/` + item.image + `.jpg`)}
              alt={item.title}
              minWidth="200px"
              borderRadius="5px"
            />
          </Flex>
        );
      })}
    </div>
  );
}

export default Cards;
