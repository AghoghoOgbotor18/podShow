import React, { useState } from 'react'
import { Section, Content, Form, Image, Input, Button, Subtitle, Card } from './CTASection.styles';
import mic from "../../assets/Images/mics.webp";
import { Text } from '../About/About.styles';

const CTASection = () => {
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
            staggerChildren: 0.25
            }
        }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const imageSlide = {
        hidden: { opacity: 0, x: 40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: "easeOut" }
        }
    };


    return (
        <Section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <Content variants={containerVariants}>
                <Card variants={containerVariants}>
                    <Subtitle variants={fadeUp}>What do you want to hear today? Subscribe for the latest episodes</Subtitle>
                    <Text variants={fadeUp}>If you want to get notified when a new episode drops. Register your email:</Text>
                    <Form variants={fadeUp} onSubmit={handleSubmit}>
                        <Input type="email" value={email} onChange={handleChange} />
                        <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Subscribe</Button>
                    </Form>
                </Card>
                <Image src={mic} alt="microphone" variants={imageSlide} />
            </Content>
        </Section>
    )
}

export default CTASection
