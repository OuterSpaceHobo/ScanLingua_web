import { Button, Flex } from "@chakra-ui/react";
import { AiFillChrome } from "react-icons/Ai";
import { IoMdArrowRoundForward } from "react-icons/Io";

export default function Reviews () {

    return (
        <>
            <Flex 
            w='100%' 
            p={`2vw`} 
            color='#38B2AC' 
            alignItems={`center`} 
            justifyContent={`center`}
            padding={{ base: '12vw', md: '6vw', lg: '4vw', xl: '3vw', '2xl': '3vw' }} 
            >
                <Button 
                bg='teal.400'
                width={'fit content'}
                height={'2em'}
                fontSize={{ base: '5vw', md: '2vw', lg: '1.5vw', xl: '1.5vw', '2xl': '1.5vw' }}
                colorScheme='teal' 
                variant='solid' 
                rightIcon={<IoMdArrowRoundForward />} 
                leftIcon={<AiFillChrome />}>
                    <a href="https://chrome.google.com/webstore/detail/scanlingua/mkkiocfjoeoolffbpldkglpfclmdiafn">
                        Add to Chrome{<span style={{opacity: `0.5`}}>&nbsp; It's free!</span>}
                    </a>
                </Button>
            </Flex>
        </>
    )
}