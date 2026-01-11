import React, {useState} from 'react'
import { Answer, Box, Faq, Faqs, Question, Section } from './WhyChooseUs.styles'
import { Content, Features, Image, Subtitle, Title, Text } from '../About/About.styles';
import women from "../../assets/Images/women.jpg";
import { FaArrowUp, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const WhyChooseUs = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }
    const faq = [
        {
            question: "What is PodShow about?",
            answer: "PodShow focuses on women's experiences — from career journeys and self-growth to mental health, relationships, and personal development."
        },
        {
            question: "Who is PodShow for?",
            answer: "PodShow is for women of all ages who want relatable conversations, encouragement, and stories that inspire growth and confidence."
        },
        {
            question: "How often are new episodes released?",
            answer: "We release new episodes weekly, ensuring fresh and relevant conversations every time."
        },
        {
            question: "Where can I listen to PodShow?",
            answer: "You can stream PodShow on all major podcast platforms and directly from our website."
        },
        {
            question: "Can I be featured on PodShow?",
            answer: "Yes! We love amplifying women's voices. You can apply through our contact page to be featured on an episode."
        }
    ]
    return (
        <Section>
            <Content>
                <Box>
                    <Title>Why Choose us?</Title>
                    <Subtitle>A podcast that listens, uplifts, and amplifies women's voices</Subtitle>
                    <Text>
                        PodShow is more than a podcast — it's a space where women feel heard, seen, and understood. We create honest conversations that reflect real experiences, real struggles, and real growth.

                        Every episode is designed to inspire confidence, spark meaningful conversations, and remind women that their stories matter. Whether it's career growth, mental wellness, relationships, or self-discovery, PodShow delivers content that speaks directly to women navigating life in all its complexity.
                    </Text>
                </Box>
                <Features>
                    <Image src={women} alt="two women talking" />
                    <Box>
                        {faq.map((item, index) => (
                            <Faq key={index}>
                                <Faqs onClick ={() => toggleFAQ(index)}>
                                    <Question>{item.question}</Question>
                                    {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                </Faqs>
                                {activeIndex === index && (
                                    <Answer>{item.answer}</Answer>
                                )}
                            </Faq>
                        ))}
                    </Box>
                </Features>
            </Content>
        </Section>
    )
}

export default WhyChooseUs
