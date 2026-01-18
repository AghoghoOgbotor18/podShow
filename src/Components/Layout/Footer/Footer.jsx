import React from 'react'
import { FooterSection, List, Subtitle, Text, Title, Lists, Content, Box, Feature, Brands, Brand, Line, Icon, Copyright } from './Footer.styles'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {

    // Parent footer animation
    const footerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2
        }
    }
    };

    // Column animation
    const columnVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
        duration: 0.6,
        ease: "easeOut"
        }
    }
    };

    // Text / list item animation
    const itemVariant = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45 }
    }
    };

    // Divider animation
    const lineVariant = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
        scaleX: 1,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
    };

    // Social icon animation
    const iconVariant = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: "backOut" }
    }
    };


    return (
        <FooterSection>
            <Content variants={footerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <Feature variants={columnVariant}>
                    <Title variants={itemVariant}>PodShow</Title>
                    <Text variants={itemVariant}>PodShow is a women-centered podcast creating honest conversations around growth, purpose, resilience, and everyday life. We amplify real stories that inspire confidence, connection, and community.</Text>
                    <Text variants={itemVariant}>Watch & Listen to us at:</Text>
                    <Brands>
                        {["Spotify", "YouTube", "TikTok", "Instagram"].map((brand, id) => (
                            <Brand key={id} variants={itemVariant}>{brand}</Brand>
                        ))}
                    </Brands>
                </Feature>
                <Box variants={columnVariant}>
                    <Subtitle variants={itemVariant}>Quick Links</Subtitle>
                    <Lists>
                        {["Home", "About Us", "Episodes", "Trending", "Testimonials", "Contacts"].map((list, id) => (
                            <List key={id} variants={itemVariant}>{list}</List>
                        ))}
                    </Lists>
                </Box>
                <Box variants={columnVariant}>
                    <Subtitle variants={itemVariant}>Explore</Subtitle>
                    <Lists>
                        {["Latest Episodes", "Featured Stories", "Guest Appearances", "Community Voices", "Community Outreach"].map((item, id) => (
                            <List key={id} variants={itemVariant}>{item}</List>
                        ))}
                    </Lists>
                </Box>
            </Content>
            <Line variants={lineVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} />
            <Copyright variants={footerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Text variants={itemVariant}>&copy; <b>2026 PodShow.</b> All rights reserved.</Text>
                <Icon variants={iconVariant} initial="hidden" whileInView="visible" viewport={{once: true}}>
                    <FaFacebook size={20} />
                    <FaInstagram size={20} />
                    <FaYoutube size={20} />
                    <FaTwitter size={20} />
                    <FaTiktok size={20} />
                </Icon>
            </Copyright>
        </FooterSection>
    )
}

export default Footer
