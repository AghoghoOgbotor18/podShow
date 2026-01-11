import React from 'react';
import firstSpeaker from "../../assets/Images/speaker1.jpg";
import secondSpeaker from "../../assets/Images/speaker2.jpg";
import thirdSpeaker from "../../assets/Images/speaker3.jpg";
import fourthSpeaker from "../../assets/Images/speaker4.jpg";
import { Card, SpeakerSection, Title, Content, Image, Grid, Group, Centered, Scale } from './Speakers.styles';
import { Subtitle, Text } from '../About/About.styles';
import { CTAButton } from '../../Components/Common/Button/Button.styles';

const Speakers = () => {
    const speakers = [
        {image: firstSpeaker, name: "Sylvia Charles", desc:"CEO, CyberQuest"}, 
        {image: secondSpeaker, name: "Tessa Daniels", desc:"Manager, Bigpal"}, 
        {image: thirdSpeaker, name: "Sarah Paul", desc:"Medical Doctor"},
        {image: fourthSpeaker, name: "Mariam Wilson", desc:"Psychologist"}
    ];
    return (
        <SpeakerSection>
            <Content>
                <Group>
                    <Title>Voices That Shapes Our Stories</Title>
                    <Subtitle>Unlimited Voices, Limitless Stories</Subtitle>
                    <Text>Every woman's journey is unique, and every story deserves to be heard. This space celebrates diversity, resilience, and shared experiences across different backgrounds, cultures, and stages of life.This is a platform where women share, connect, and grow through powerful conversations</Text>
                </Group>
                <Grid>
                    {speakers.map((speaker, id) => (
                        <Card key={id}>
                            <Scale>
                                <Image src={speaker.image} alt="women talking" />
                            </Scale>
                            <Title>{speaker.name}</Title>
                            <Text>{speaker.desc}</Text>
                        </Card>
                    ))}
                </Grid>
                <Centered>
                    <CTAButton>Discover Voices</CTAButton>
                </Centered>
            </Content>
        </SpeakerSection>
    )
}

export default Speakers
