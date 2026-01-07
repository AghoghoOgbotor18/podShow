import React from 'react';
import { HeroWrapper, Content, Title,Subtitle, Button, Container, Image, Icons, Text } from './Hero.styles';
import { FaAngleRight,FaChevronRight } from 'react-icons/fa';
import spotify from "../../assets/Images/spotify.png";
import youtube from "../../assets/Images/youtube.png";
import tiktok from "../../assets/Images/tiktok.png";
import apple from "../../assets/Images/apple.png";

const Hero = () => {
  return (
    <>
        <HeroWrapper>
            <Content>
                <Title>Unfiltered Conversations. Real Women. Real Life.</Title>
                <Subtitle>This podcast dives into the realities women face every day. From ambition, self-doubt, resilience, balance, and purpose. Through raw conversations and shared experiences, we celebrate strength, vulnerability, and the power of women supporting women.</Subtitle>
                <Button>Start Listening<FaChevronRight /></Button>
            </Content>
            <Container>
                <Text>Watch and follow us on: </Text>
                <Icons>
                    <Image src={spotify} alt="spotify logo" />
                    <Image src={apple} alt="apple logo" />
                    <Image src={youtube} alt="youtube" />
                    <Image src={tiktok} alt="tiktok" />
                </Icons>
            </Container>
        </HeroWrapper>
        
    </>
  )
}

export default Hero
