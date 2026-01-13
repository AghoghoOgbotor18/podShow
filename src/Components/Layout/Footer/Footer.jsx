import React from 'react'
import { FooterSection, List, Subtitle, Text, Title, Lists, Content, Box, Feature, Brands, Brand, Line, Icon, Copyright } from './Footer.styles'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const lists = [
        {link: "Home"}, {link: "About Us"}, {link: "Episodes"}, {link: "Trending"}, {link: "Testimonials"}, {link: "Contact"}
    ];
    const items = [
        {list: "Latest Episodes"}, {list: "Featured Stories"}, {list: "Guest Apperances"}, {list: "Community Voices"}, {list: "Community Voices"}
    ];
    return (
        <FooterSection>
            <Content>
                <Feature>
                    <Title>PodShow</Title>
                    <Text>PodShow is a women-centered podcast creating honest conversations around growth, purpose, resilience, and everyday life. We amplify real stories that inspire confidence, connection, and community.</Text>
                    <Text>Watch & Listen to us at:</Text>
                    <Brands>
                        <Brand>Spotify</Brand>
                        <Brand>YouTube</Brand>
                        <Brand>Apple Music</Brand>
                        <Brand>Instagram</Brand>
                    </Brands>
                </Feature>
                <Box>
                    <Subtitle>Quick Links</Subtitle>
                    <Lists>
                        {lists.map((list, id) => (
                            <List key={id}>{list.link}</List>
                        ))}
                    </Lists>
                </Box>
                <Box>
                    <Subtitle>Explore</Subtitle>
                    <Lists>
                        {items.map((item, id) => (
                            <List key={id}>{item.list}</List>
                        ))}
                    </Lists>
                </Box>
            </Content>
            <Line />
            <Copyright>
                <Text>&copy; <b>2026 PodShow.</b> All rights reserved.</Text>
                <Icon>
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
