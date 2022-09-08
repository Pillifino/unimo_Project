import { extendTheme } from '@chakra-ui/react';
import "@fontsource/rammetto-one"

 const myNewTheme = extendTheme({
  colors: {
    bg: '#E6E6E6',
    bgAccent:"#808080",
  },
  fonts: {
    heading: 'Rammetto One',
    body: 'Rammetto One',
  },
});

export default myNewTheme