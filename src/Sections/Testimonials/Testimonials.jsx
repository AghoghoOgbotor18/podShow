import React, { useEffect, useState } from 'react'
import { 
  Identity, Image, Name, Names, Role, TestimonialCard, TestimonialCards, TestimonialContainer, TestimonialSection, Dots, Dot, Content
} from './Testimonials.styles';
import { Subtitle, Text, Title } from '../About/About.styles';
import firstPerson from "../../assets/Images/passprt1.jpg";
import secondPerson from "../../assets/Images/passprt2.jpg";
import thirdPerson from "../../assets/Images/passprt3.jpg";

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [cardPerSlide, setCardPerSlide] = useState(3);

    const testimonials = [
        {
            id: 1,
            name: "Aisha M.",
            role: "Career Coach & Listener",
            message:
            "PodShow feels like a safe space. Every episode reminds me that I'm not alone in my struggles. The conversations are honest, relatable, and incredibly empowering.",
            image: firstPerson,
        },
        {
            id: 2,
            name: "Blessing O.",
            role: "Entrepreneur",
            message:
            "Listening to PodShow has changed how I view my personal and professional journey. The stories shared are real, raw, and deeply inspiring.",
            image: secondPerson,
        },
        {
            id: 3,
            name: "Tolu A.",
            role: "University Student",
            message:
            "This podcast gives me clarity and confidence. It feels like having meaningful conversations with women who truly understand what I'm going through.",
            image: thirdPerson,
        },
        {
            id: 4,
            name: "Mariam K.",
            role: "Content Creator",
            message:
            "PodShow is more than entertainment — it's healing. Each episode leaves me encouraged, grounded, and motivated to keep pushing forward.",
            image: secondPerson,
        },
        {
            id: 5,
            name: "Sylvia B.",
            role: "Career Coach & Listener",
            message:
            "PodShow feels like a safe space. Every episode reminds me that I'm not alone in my struggles. The conversations are honest, relatable, and incredibly empowering.",
            image: firstPerson,
        },
        {
            id: 6,
            name: "Michael D.",
            role: "Entrepreneur",
            message:
            "Listening to PodShow has changed how I view my personal and professional journey. The stories shared are real, raw, and deeply inspiring.",
            image: thirdPerson,
        },
        {
            id: 7,
            name: "Ife M.",
            role: "University Student",
            message:
            "This podcast gives me clarity and confidence. It feels like having meaningful conversations with women who truly understand what I'm going through.",
            image: firstPerson,
        },
        {
            id: 8,
            name: "Brian A.",
            role: "Content Creator",
            message:
            "PodShow is more than entertainment — it's healing. Each episode leaves me encouraged, grounded, and motivated to keep pushing forward.",
            image: secondPerson,
        },
        {
            id: 9,
            name: "Sylvia B.",
            role: "Career Coach & Listener",
            message:
            "PodShow feels like a safe space. Every episode reminds me that I'm not alone in my struggles. The conversations are honest, relatable, and incredibly empowering.",
            image: firstPerson,
        },
        {
            id: 10,
            name: "Michael D.",
            role: "Entrepreneur",
            message:
            "Listening to PodShow has changed how I view my personal and professional journey. The stories shared are real, raw, and deeply inspiring.",
            image: thirdPerson,
        },
        {
            id: 11,
            name: "Ife M.",
            role: "University Student",
            message:
            "This podcast gives me clarity and confidence. It feels like having meaningful conversations with women who truly understand what I'm going through.",
            image: firstPerson,
        },
        {
            id: 12,
            name: "Brian A.",
            role: "Content Creator",
            message:
            "PodShow is more than entertainment — it's healing. Each episode leaves me encouraged, grounded, and motivated to keep pushing forward.",
            image: secondPerson,
        },
    ];
    //detect screen size
    useEffect(() => {
        const updateCard = () => {
            if(window.innerWidth < 768){
                setCardPerSlide(1);
            } else if(window.innerWidth < 1024){
                setCardPerSlide(2);
            } else{
                setCardPerSlide(3);
            }
        }
        updateCard();
        window.addEventListener("resize", updateCard);
        return () => window.removeEventListener("resize", updateCard);
    }, []);

    const totalSlides = Math.ceil(testimonials.length / cardPerSlide);

    //autoslide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => prev === totalSlides - 1 ? 0 : prev+1);
        }, 4000);

        return () => clearInterval(interval);
    }, [totalSlides]);

    const startIndex = currentSlide * cardPerSlide;
    const visibleTestimonials = testimonials.slice(startIndex, startIndex + cardPerSlide);

    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3,
                duration: 2
            }
        }
    };

    const show = {
        hidden: {opacity:0},
        visible: {
            opacity:1,
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
        <TestimonialSection id="testimonials">
            <Content variants={container} initial="hidden" whileInView="visible" viewport={{once: true}}>
                <Title variants={items}>What Women Say About Us</Title>
                <Subtitle variants={items}>
                    Shine Bright, Speak Loud:<br />
                    Testimonials Take Flight
                </Subtitle>

                <Text variants={items}>
                    Real voices. Real stories. Here's how PodShow is impacting lives
                    through honest conversations and shared experiences.
                </Text>

                <TestimonialContainer variants={items}>
                    <TestimonialCards
                    style={{
                        transform: `translateX(-${
                        currentSlide * (320 * cardPerSlide)
                        }px)`,
                    }}
                    >
                    {testimonials.map((item) => (
                        <TestimonialCard key={item.id}>
                        <Text>{item.message}</Text>
                        <Identity>
                            <Image src={item.image} alt={item.name} />
                            <Names>
                            <Name>{item.name}</Name>
                            <Role>{item.role}</Role>
                            </Names>
                        </Identity>
                        </TestimonialCard>
                    ))}
                    </TestimonialCards>
                </TestimonialContainer>

                {/* ---- DOTS ---- */}
                <Dots variants={items}>
                    {Array.from({ length: totalSlides }).map((_, index) => (
                    <Dot
                        key={index}
                        active={index === currentSlide}
                        onClick={() => setCurrentSlide(index)}
                    />
                    ))}
                </Dots>
            </Content>
        </TestimonialSection>

    )
}

export default Testimonials
