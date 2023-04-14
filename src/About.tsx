import { Flex, Heading } from "@chakra-ui/react";
import { ApiIcon, ContainerM, CropIcon, TextItem } from "./StyledComponents";

export default function About () {

    return (
        <>
            <Flex w='100%' p={0} alignItems={`center`}>
                <Flex w='100%' direction={`row`} justifyContent={`center`}>
                    <Heading 
                    fontSize={{ base: '6vw', md: '2.5vw', lg: '2.5vw', xl: '2.5vw', '2xl': '2.5vw' }}
                    paddingTop={{ base: '12vw', md: '4vw', lg: '4vw', xl: '4vw', '2xl': '4vw' }}
                    >
                        How it works
                        </Heading>
                </Flex>
            </Flex>
            <ContainerM 
            style={{textAlign: `center`}}>
                <TextItem>
                    <Flex 
                    direction={`column`} 
                    justifyContent={`center`}
                    paddingBottom={{ base: '10vw', md: '1vw', lg: '1vw', xl: '1vw', '2xl': '1vw' }} 
                    alignItems={`center`}
                    >
                        <ApiIcon 
                        style={{color: '#38B2AC'}}/>
                        <Heading 
                        fontSize={{ base: '4.5vw', md: '2vw', lg: '2vw', xl: '1.25vw', '2xl': '1.25vw' }}
                        padding={'1vw'}>
                            Create credentials
                        </Heading>
                        <Heading 
                        fontSize={{ base: '4.5vw', md: '2vw', lg: '2vw', xl: '1.25vw', '2xl': '1.25vw' }}
                        opacity='0.5'>
                            For recognition & translation ScanLingua use Google APIs<br />
                            This APIs provide 1000 free requests per month <br /> which should suffice for personal use
                        </Heading>
                        <Heading 
                        fontSize={{ base: '4.5vw', md: '2vw', lg: '2vw', xl: '1.25vw', '2xl': '1.25vw' }}
                        color={'#319795'} 
                        textDecor={'underline'}>
                            <a href="https://github.com/OuterSpaceHobo/ScanLingua#how-to-get-api-key">instruction</a>
                        </Heading>
                    </Flex>
                </TextItem>
                <TextItem>
                    <Flex 
                    direction={`column`}
                    alignItems={`center`}
                    >
                        <CropIcon 
                        style={{color: '#38B2AC'}}/>
                        <Heading 
                        fontSize={{ base: '4.5vw', md: '2vw', lg: '2vw', xl: '1.25vw', '2xl': '1.25vw' }}
                        padding={'1vw'}>
                            Use hotkey to crop
                        </Heading>
                        <Heading 
                        fontSize={{ base: '4.5vw', md: '2vw', lg: '2vw', xl: '1.25vw', '2xl': '1.25vw' }}
                        opacity='0.5'>
                            You can use preset hotkey <br /> 
                            Ctrl + S <br />
                            or setup your own at <br />
                            chrome://extensions/shortcuts
                        </Heading>
                    </Flex>
                </TextItem>
            </ContainerM>
        </>
    )
}