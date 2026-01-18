import styled from "styled-components";
import { devices } from "../../Styles/media";
import { motion } from "framer-motion";
export const TrendWrapper = styled(motion.section)`
    color: #131313;
    padding: 1rem;
    position: relative;
`;
export const TrendContent = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;

    @media ${devices.tablet} {
        align-items: center;
    }
`;
export const Cards = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    @media ${devices.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }
    @media ${devices.mobile} {
        grid-template-columns: 1fr;
    }
`;
export const Card = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap:5px;
    border-radius: 10px;
    box-shadow: 3px 3px 5px #e6d7d7ff;
    padding: 0.7rem;
    background: #fdfdfdff;
    transition: 2s;

    &:hover{
        transform: translateY(-5px);
    }
`;
export const SectionTitle = styled(motion.h1)`
    font-weight: bold;
    margin-bottom: 15px;
`;
export const TrendImage = styled.img`
    border-radius: 10px;
    width: 100%;
    height: 200px;
    object-fit:cover;
    border-radius: 10px;
`;
export const TrendTitle = styled.h3`
    font-weight: 700;
`;
export const TrendText = styled.p`
    font-size: 15px;
`;
export const TrendButton = styled.a`
    font-weight: 600;
    font-size: 13px;
    color: #000;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 3px;
`;
