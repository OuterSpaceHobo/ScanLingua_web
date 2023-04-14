import { Box, Button, Heading } from "@chakra-ui/react";
import { IoMdArrowRoundForward } from 'react-icons/Io'
import { AiFillChrome } from 'react-icons/Ai'
import { ContainerM, HeaderBox, VideoItem } from "./StyledComponents";

export default function Home () {

    return (
        <>
            <ContainerM
            style={{alignItems: `center`}}>
                <HeaderBox>
                    <Heading 
                    fontSize={{ base: '6vw', md: '3vw', lg: '3vw', xl: '3vw', '2xl': '3vw' }}
                    paddingBottom={{ base: '12vw', md: '1vw', lg: '1vw', xl: '1vw', '2xl': '1vw' }} 
                    paddingLeft={'1vw'} 
                    >
                        Recognition & translation{<br />}for Japanese language learners
                    </Heading>
                    <Box 
                    width={'fit-content'}
                    style={{padding: `1vw`}}>
                        <Button 
                        width={'100%'}
                        height={'2em'}
                        fontSize={{ base: '5vw', md: '2vw', lg: '1.5vw', xl: '1.5vw', '2xl': '1.5vw' }}
                        bg='teal.400'
                        colorScheme='teal' 
                        variant='solid' 
                        rightIcon={<IoMdArrowRoundForward />} 
                        leftIcon={<AiFillChrome />}>
                            <a href="https://chrome.google.com/webstore/detail/scanlingua/mkkiocfjoeoolffbpldkglpfclmdiafn">
                                Add to Chrome{<span style={{opacity: `0.5`}}>&nbsp; It's free!</span>}
                            </a>
                        </Button>
                    </Box>
                    <Heading 
                    paddingLeft={'1vw'} 
                    fontSize={{ base: '2vw', md: '1vw', lg: '1vw', xl: '1vw', '2xl': '1vw' }}
                    opacity= {'0.5'}>
                        *this is a proof of concept build, stability is not guaranteed 
                    </Heading>
                </HeaderBox>
                <VideoItem>
                    <video 
                    width={'100%'}
                    src="/demo/demo-video.mp4"
                    autoPlay
                    playsInline
                    loop 
                    muted
                    poster="/demo/poster.png">
                    </video>
                </VideoItem>
            </ContainerM>
        </>
    )
}