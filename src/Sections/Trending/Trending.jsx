import React from 'react';
import { TrendContent, SectionTitle, TrendTitle, TrendWrapper, Cards, Card, TrendImage, TrendText, TrendButton } from './Trending.styles';
import {FiArrowUpRight} from "react-icons/fi";
import { motion } from 'framer-motion';

const Trending = () => {
    const episodes =[
      {
        title: "Finding Your Voice",
        desc: "A conversation about confidence, growth, and speaking up.",
        image: "/images/sub1.jpg",
      },
      {
        title: "Women & Career Growth",
        desc: "Breaking barriers and navigating workplace challenges.",
        image: "/images/sub2.jpg",
      },
      {
        title: "Healing & Self-Worth",
        desc: "Understanding emotional strength and self-love.",
        image: "/images/sub3.jpg",
      },
      {
        title: "Balancing Life & Dreams",
        desc: "How women juggle ambition, family, and purpose.",
        image: "/images/sub4.jpg",
      },
    ];

    const items = {
        hidden: {opacity: 0, y: 10},
        visible: {opacity: 1, y: 0, transition: {
          duration: 0.6
        }},
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

  return (
    <TrendWrapper id="trending">
      <SectionTitle variants={items} viewport={{once: true, }}>Trending Episodes</SectionTitle>
        <TrendContent>
          <Cards>
            {episodes.map((card,id) => (
              <Card key={id} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                <TrendImage src={card.image} alt={card.title} />
                <TrendTitle>{card.title}</TrendTitle>
                <TrendText>{card.desc}</TrendText>
                <TrendButton>Watch Now<FiArrowUpRight size={15} /></TrendButton>
              </Card>
            ))}
          </Cards>
        </TrendContent>
    </TrendWrapper>
  )
}

export default Trending
