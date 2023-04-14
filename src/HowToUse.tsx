import { Flex, Heading } from "@chakra-ui/react";
import { ContainerS, DemoImg } from "./StyledComponents";

export default function HowToUse () {

    return (
        <>
            <Flex w='100%' alignItems={`center`}>
                <Flex w='100%' direction={`row`} justifyContent={`center`}>
                    <Heading 
                    fontSize={{ base: '6vw', md: '2.5vw', lg: '2.5vw', xl: '2.5vw', '2xl': '2.5vw' }}
                    paddingTop={{ base: '12vw', md: '3vw', lg: '3vw', xl: '3vw', '2xl': '3vw' }} 
                    textAlign={`center`}>
                        Crop tab parts anywhere on web
                    </Heading>
                </Flex>
            </Flex>

            <ContainerS>
                    <DemoImg>
                        <img src="/demo/demo-1.png" alt="" />
                    </DemoImg>
                    <DemoImg>
                        <img src="/demo/demo-2.png" alt="" />
                    </DemoImg>
            </ContainerS>
            <ContainerS>
                    <DemoImg>
                        <img src="/demo/demo-3.png" alt="" />
                    </DemoImg>
                    <DemoImg>
                        <img src="/demo/demo-4.png" alt="" />
                    </DemoImg>
            </ContainerS>
        </>
    )
}