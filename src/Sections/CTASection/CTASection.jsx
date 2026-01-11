import React, { useState } from 'react'
import { Section, Content, Form, Image, Input, Button, Subtitle, Card } from './CTASection.styles';
import mic from "../../assets/Images/mic.png";
import { Text } from '../About/About.styles';

const CTASection = () => {
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChange = (e) => {
        setEmail(e.target.value);
    }
    return (
        <Section>
            <Content>
                <Card>
                    <Subtitle>What do you want to hear today? Subscribe for the latest episodes</Subtitle>
                    <Text>If you want to get notified when a new episode drops. Register your email:</Text>
                    <Form onSubmit={handleSubmit}>
                        <Input type="email" value={email} onChange={handleChange} />
                        <Button>Subscribe</Button>
                    </Form>
                </Card>
                <Image src={mic} alt="microphone" />
            </Content>
        </Section>
    )
}

export default CTASection
