import { EnvelopeIcon, GithubIcon, LinkedInIcon, TelegramIcon, AIcon } from "./StyledComponents";

export default function Icons () {

    return (
        <> 
            <AIcon href="https://t.me/+v7OhTnrVwxBiY2Ji" target="_blank" rel="noreferrer" style={{paddingRight: '2vw'}}>
                <TelegramIcon 
                style={{color: 'lightgray'}}/>
            </AIcon>  

            <AIcon href="https://github.com/OuterSpaceHobo/ScanLingua.git" target="_blank" rel="noreferrer" style={{paddingRight: '2vw'}}>
                <GithubIcon 
                style={{color: 'lightgray'}}/>
            </AIcon>  

            <AIcon href="https://www.linkedin.com/in/shabalinst/" target="_blank" rel="noreferrer" style={{paddingRight: '2vw'}}>
                <LinkedInIcon 
                style={{color: 'lightgray'}}/>
            </AIcon>

            <AIcon href="mailto:shabalin.st@gmail.com" target="_blank" rel="noreferrer" style={{paddingRight: '2vw'}}>
                <EnvelopeIcon 
                style={{color: 'lightgray'}}/>
            </AIcon>
        </>
    )
}