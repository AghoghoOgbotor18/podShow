import React, { useState, useEffect } from 'react';
import { HeroWrapper, Content, Title,Subtitle, Button, Slide } from './Hero.styles';
import { FaChevronRight } from 'react-icons/fa';
import heroBg1 from "../../assets/Images/hero-bg.jpg";
import heroBg2 from "../../assets/Images/women3.jpg";
import heroBg3 from "../../assets/Images/women4.jpg";
import {motion, AnimatePresence} from "framer-motion";

const Hero = () => {

    const slides =[heroBg1, heroBg2, heroBg3];
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length)
        }, 4000);

        return () => clearInterval(interval);
    })


    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3,
                duration: 2
            }
        }
    };

    const items = {
        hidden: {opacity: 0, y: 10},
        visible: {opacity: 1, y: 0},
    };

    return (
        <>
            <HeroWrapper id="home">
                <AnimatePresence mode="wait">
                    <Slide key={index} image={slides[index]} initial={{opacity: 1 }} animate={{opacity: 1 }} exit={{ opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }}/>
                </AnimatePresence>
                <Content variants={container} initial="hidden" animate="visible">
                    <Title variants={items}>Unfiltered Conversations. Real Women. Real Life.</Title>
                    <Subtitle variants={items}>This podcast dives into the realities women face every day. From ambition, self-doubt, resilience, balance, and purpose. Through raw conversations and shared experiences, we celebrate strength, vulnerability, and the power of women supporting women.</Subtitle>
                    <Button variants={items}>Start Listening<FaChevronRight /></Button>
                </Content>
            </HeroWrapper>
            
        </>
    )
}

export default Hero
