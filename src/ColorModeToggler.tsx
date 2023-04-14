import { Button, useColorMode } from "@chakra-ui/react";
import { MdLightMode, MdDarkMode } from "react-icons/Md";


export const ColorModeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header>
        <Button 
        bg='teal.400'
        colorScheme='teal' 
        variant='solid' 
        width={'fit content'}
        height={'1.5em'}
        fontSize={{ base: '5vw', md: '2vw', lg: '1.5vw', xl: '1.5vw', '2xl': '1.5vw' }}
        onClick={toggleColorMode}
        > 
            {colorMode === "light" ? <MdDarkMode /> : <MdLightMode /> }
        </Button>
    </header>
  );
};
