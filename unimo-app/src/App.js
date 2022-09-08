import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

// import { ColorModeSwitcher } from './ColorModeSwitcher';
import Container from './Components/Container/container';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container/>
    </ChakraProvider>
  );
}

export default App;
