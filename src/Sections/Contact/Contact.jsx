import React, { useState } from 'react'
import { ContactSection, Form, Input, Inputs, Textarea, Image, Info } from './Contact.styles'
import { Brands, Content, Features, Subtitle, Text } from '../About/About.styles'
import { Box } from '../WhyChooseUs/WhyChooseUs.styles'
import { FaLocationArrow, FaMailBulk, FaUser } from 'react-icons/fa';
import people from "../../assets/Images/people.jpg"
import { CTAButton } from '../../Components/Common/Button/Button.styles';

const Contact = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [textarea, setTextarea] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <ContactSection>
            <Content>
                <Box>
                    <Subtitle>Get In Touch</Subtitle>
                    <Text>Reach out to us in any of our platform, send mails and ask as many question as possible</Text>
                    <Info>
                        <Brands>
                            <FaLocationArrow />
                            <Text>Our Location</Text>
                        </Brands>
                        <Text>22. Dedevwo Road, Delta State, Nigeria</Text>
                    </Info>
                    <Info>
                        <Brands>
                            <FaUser />
                            <Text>Contact Us</Text>
                        </Brands>
                        <Text>+2348026930078</Text>
                    </Info>
                    <Info>
                        <Brands>
                            <FaMailBulk />
                            <Text>Email</Text>
                        </Brands>
                        <Text>aghoghoogbotor@gmail.com</Text>
                    </Info>
                </Box>
                <Features>
                    <Image src={people} alt="people talking" />
                    <Box>
                        <Subtitle>Get In Touch</Subtitle>
                        <Form onSubmit={handleSubmit}>
                            <Inputs>
                                <Input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name"/>
                                <Input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name"/>
                            </Inputs>
                            <Inputs>
                                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                                <Input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject"/>
                            </Inputs>
                            <Textarea value={textarea} onChange={(e) => setTextarea(e.target.value)}placeholder="Message...." />
                            <CTAButton>Send Message</CTAButton>
                        </Form>
                    </Box>
                </Features>
            </Content>
        </ContactSection>
    )
}

export default Contact
