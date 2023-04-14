import { Flex, Heading } from "@chakra-ui/react";
import { TelegramIcon, GithubIcon, LinkedInIcon, EnvelopeIcon } from "./StyledComponents";

export default function Footer () {

    return (
        <>
            <Flex 
            w='100%' 
            p={4} 
            justifyContent={'center'} 
            alignItems={'center'}
            opacity='0.5'>
                <Heading 
                fontSize={{ base: '3vw', md: '2vw', lg: '1.5vw', xl: '1vw', '2xl': '1.5vw' }}
                paddingRight={`1vw`} 
                >
                    Made by OuterSpaceHobo
                </Heading>

                <a href="https://t.me/+v7OhTnrVwxBiY2Ji" target="_blank" rel="noreferrer" style={{paddingRight: '2vw'}}>
                    <TelegramIcon />
                </a>  

                <a href="https://github.com/OuterSpaceHobo/ScanLingua.git" target="_blank" rel="noreferrer" style={{paddingRight: '2vw'}}>
                    <GithubIcon />
                </a>  

                <a href="https://www.linkedin.com/in/shabalinst/" target="_blank" rel="noreferrer" style={{paddingRight: '2vw'}}>
                    <LinkedInIcon />
                </a>

                <a href="mailto:shabalin.st@gmail.com" target="_blank" rel="noreferrer">
                    <EnvelopeIcon />
                </a>
            </Flex>
        </>
    )
}