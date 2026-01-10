import React from 'react';
import { AboutSection, AboutUs, Title, Subtitle, Image, Text, Brands, Content, Features, Active, Followers, Passports, Group, Grid } from './About.styles';
import {CTAButton} from "../../Components/Common/Button/Button.styles";
import aboutImage from "../../assets/Images/pod11.jpg";
import {FaDiscord, FaLock, FaPlay, FaRunning, FaUsers} from "react-icons/fa";
import firstPhoto from "../../assets/Images/passprt1.jpg";
import secondPhoto from "../../assets/Images/passprt2.jpg";
import thirdPhoto from "../../assets/Images/passprt3.jpg";


const About = () => {
    const passports = [
        {passport: firstPhoto},{passport: secondPhoto}, {passport: thirdPhoto}
    ]
    const brands = [
        {brandName:"MiAmor", logo:<FaDiscord />},
        {brandName: "WomenAdvo", logo: <FaUsers />},
        {brandName: "LoveMe", logo: <FaLock />},
        {brandName: "WeMove", logo:<FaRunning />}
    ];
    return (
        <AboutSection>
            <Content>
                <AboutUs>
                    <Title>About PodShow</Title>
                    <Subtitle>Epic HeadLines, Always Fresh, Always Here</Subtitle>
                    <Text>PodShow is where women speak freely. We share unfiltered conversations about ambition, resilience, self-worth, and navigating life's challenges. Each episode offers perspective, encouragement, and the reminder that growth doesn't happen in isolation.</Text>
                    <CTAButton>Learn More</CTAButton>
                    <Text>Brands we represent:</Text>
                    <Grid>
                        {brands.map((brand, id) => (
                            <Brands key={id}>{brand.logo} {brand.brandName}</Brands>
                        ))}
                    </Grid>
                </AboutUs>
                <Features>
                    <Image src={aboutImage} alt="woman talking" />
                    <AboutUs>
                        <Text>
                            Through honest storytelling and meaningful discussions, PodShow explores the realities of womanhood in all its forms. From career journeys and personal development to relationships, mental wellness, and self-discovery, each episode is designed to inspire, inform, and remind women that they are not alone.

                            At its core, PodShow celebrates strength, vulnerability, and the power of women supporting women. This is more than a podcast — it's a community built on shared experiences, encouragement, and the belief that every woman's story deserves to be heard.
                        </Text> 
                        <Brands>
                            <Active>
                                <FaPlay />
                            </Active>
                            <Text>We're always active</Text>
                        </Brands>
                        <Text>We have over</Text>
                        <Brands>
                            <Followers>
                                <Subtitle>2.3M+</Subtitle>
                                <Text>Active Followers</Text>
                            </Followers>
                            <Followers>
                                <Subtitle>5.3K</Subtitle>
                                <Text>Total Episodes</Text>
                            </Followers>
                        </Brands>
                        <Text>Over 500+ views daily</Text>
                        <Group>
                            {passports.map((passprt, id) => (
                                <Passports key={id} src={passprt.passport} alt="women" />
                            ))}
                        </Group>
                    </AboutUs>
                </Features>
            </Content>
        </AboutSection>
    )
}

export default About
