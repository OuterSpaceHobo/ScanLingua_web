import { AiOutlineApi } from 'react-icons/Ai'
import { BiCrop } from 'react-icons/Bi'
import { BsEnvelopeFill, BsGithub, BsLinkedin, BsTelegram } from 'react-icons/Bs'
import styled from 'styled-components'

export const ContainerM = styled.div`
    flex-direction: row;
    display: flex;
    padding: 1vw;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    min-height: fit-content;
  }
`
export const ContainerS = styled.div`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    display: flex;

  @media (max-width: 425px) {
    width: 100%;
    flex-direction: column;
    min-height: fit-content;
  }
`

export const DemoImg = styled.div`
    width: 50%;
    align-items: center;
    flex-direction: column;
    display: flex;
    padding: 1vw;

  @media (max-width: 425px) {
    width: 100%;
    flex-direction: column;
    min-height: fit-content;
  }
`

export const VideoItem = styled.div`
    align-items: center;
    flex-direction: row;
    justify-content: center;
    padding: 1vw;
    width: 60%;

  @media (max-width: 768px) {
    width: 100%;
    min-height: fit-content;
  }
`

export const TextItem = styled.div`
    align-items: center;
    flex-direction: row;
    justify-content: center;
    padding: 1vw;
    width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    min-height: fit-content;
  }
`

export const HeaderBox = styled.div`
    align-items: center;
    flex-direction: row;
    justify-content: center;
    padding: 1vw;
    width: 40%;

  @media (max-width: 768px) {
    display: flex;
    text-align: center;
    flex-direction: column;
    width: 100%;
    min-height: fit-content;
    padding: 4vw;
  }
`

export const ApiIcon  = styled(AiOutlineApi)`
@media (min-width: 768px) {
    height: 5vw;
    width: 5vw;
}
@media (max-width: 768px) {
    height: 15vw;
    width: 15vw;
}
@media (max-width: 425px) {
    height: 15vw;
    width: 15vw;
}
`

export const CropIcon  = styled(BiCrop)`
@media (min-width: 768px) {
    height: 5vw;
    width: 5vw;
}
@media (max-width: 768px) {
    height: 15vw;
    width: 15vw;
}
@media (max-width: 425px) {
    height: 15vw;
    width: 15vw;
}
`

export const TelegramIcon  = styled(BsTelegram)`
@media (min-width: 768px) {
    height: 1.25vw;
    width: 1.25vw;
}
@media (max-width: 768px) {
    height: 3vw;
    width: 3vw;
}
@media (max-width: 425px) {
    height: 5vw;
    width: 5vw;
}
`

export const LinkedInIcon  = styled(BsLinkedin)`
@media (min-width: 768px) {
    height: 1.25vw;
    width: 1.25vw;
}
@media (max-width: 768px) {
    height: 3vw;
    width: 3vw;
}
@media (max-width: 425px) {
    height: 5vw;
    width: 5vw;
}
`

export const GithubIcon  = styled(BsGithub)`
@media (min-width: 768px) {
    height: 1.25vw;
    width: 1.25vw;
}
@media (max-width: 768px) {
    height: 3vw;
    width: 3vw;
}
@media (max-width: 425px) {
    height: 5vw;
    width: 5vw;
}
`

export const EnvelopeIcon  = styled(BsEnvelopeFill)`
@media (min-width: 768px) {
    height: 1.25vw;
    width: 1.25vw;
}
@media (max-width: 768px) {
    height: 3vw;
    width: 3vw;
}
@media (max-width: 425px) {
    height: 5vw;
    width: 5vw;
}
`

export const AIcon  = styled.a`
@media (max-width: 425px) {
    display: none;
}
`