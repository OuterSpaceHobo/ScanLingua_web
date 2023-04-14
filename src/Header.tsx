import { Flex, Heading, Spacer } from "@chakra-ui/react";
import { ColorModeToggler } from "./ColorModeToggler";
import Icons from "./Icons";

export default function Header () {

    return (
        <> 
            <Flex 
            w='100%' 
            p={4} 
            boxShadow={'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}
            position={'relative'}
            alignItems={`center`}>
                <Heading 
                paddingLeft={'1vw'} 
                color='#319795' 
                fontSize={{ base: '3vw', md: '2vw', lg: '1.5vw', xl: '1.5vw', '2xl': '1.5vw' }}>
                    ScanLingua
                </Heading>
                <Heading 
                paddingLeft={'1vw'} 
                fontSize={{ base: '2vw', md: '1.5vw', lg: '1vw', xl: '1vw', '2xl': '1vw' }}
                opacity='0.5'>
                    open-source project
                </Heading>

                <Spacer />
                <Icons />
                <ColorModeToggler />
            </Flex>
        </>
    )
}