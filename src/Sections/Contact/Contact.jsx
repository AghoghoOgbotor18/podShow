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


    const boxVariant ={
        hidden: {opacity: 0, x: -20},
        visible: {opacity: 1, x: 0,
            transition: {
                duration: 2,
                staggerChildren: 0.3
            }
        }
    };

    const container = {
        hidden: {opacity: 0, x: 20},
        visible: {opacity: 1, x: 0,
            transition: {
                duration: 2,
                staggerChildren: 0.2
            },
        }
    }

    const items = {
        hidden: {opacity: 0, x: -20},
        visible: {opacity: 1, x: 0}
    }
    const item = {
        hidden: {opacity: 0, x: 20},
        visible: {opacity: 1, x: 0}
    }

    return (
        <ContactSection id="contact">
            <Content variants={boxVariant} initial="hidden" whileInView="visible" viewport= {{once: true, amount: 0.2}}>
                <Box variants={boxVariant} initial="hidden" animate="visible">
                    <Subtitle variants={items}>Get In Touch</Subtitle>
                    <Text variants={items}>Reach out to us in any of our platform, send mails and ask as many question as possible</Text>
                    <Info>
                        <Brands variants={item}>
                            <FaLocationArrow />
                            <Text>Our Location</Text>
                        </Brands>
                        <Text variants={item}>22. Dedevwo Road, Delta State, Nigeria</Text>
                    </Info>
                    <Info>
                        <Brands variants={item}>
                            <FaUser />
                            <Text>Contact Us</Text>
                        </Brands>
                        <Text variants={item}>+2348026930078</Text>
                    </Info>
                    <Info>
                        <Brands variants={item}>
                            <FaMailBulk />
                            <Text>Email</Text>
                        </Brands>
                        <Text variants={item}>aghoghoogbotor@gmail.com</Text>
                    </Info>
                </Box>
                <Features variants={container} initial="hidden" animate="visible" >
                    <Image src={people} alt="people talking" />
                    <Box variants={container} initial="hidden" animate="visible">
                        <Subtitle variants={items}>Get In Touch</Subtitle>
                        <Form onSubmit={handleSubmit} variants={container} initial="hidden" animate="visible">
                            <Inputs variants={items}>
                                <Input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name"/>
                                <Input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name"/>
                            </Inputs>
                            <Inputs variants={items}>
                                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                                <Input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject"/>
                            </Inputs>
                            <Textarea value={textarea} onChange={(e) => setTextarea(e.target.value)}placeholder="Message...." variants={items}/>
                            <CTAButton variants={items}>Send Message</CTAButton>
                        </Form>
                    </Box>
                </Features>
            </Content>
        </ContactSection>
    )
}

export default Contact
