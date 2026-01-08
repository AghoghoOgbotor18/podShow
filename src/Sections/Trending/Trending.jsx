import React from 'react';
import { TrendContent, SectionTitle, TrendTitle, TrendWrapper, Cards, Card, TrendImage, TrendText, TrendButton } from './Trending.styles';
import {FiArrowUpRight} from "react-icons/fi"

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
  return (
    <TrendWrapper>
      <SectionTitle>Trending Episodes</SectionTitle>
      <TrendContent>
        <Cards>
          {episodes.map((card,id) => (
            <Card key={id}>
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
