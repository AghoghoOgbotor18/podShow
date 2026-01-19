import styled from "styled-components";
import { devices } from "../../Styles/media";
import { motion } from "framer-motion";
export const SpeakerSection = styled.section`
    padding: 4rem 1rem;
    background: #f4f4f4;
`;
export const Content = styled.div`
    display:flex;
    flex-direction: column;
    gap: 2rem;
`;
export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem;

    @media ${devices.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${devices.mobile} {
        grid-template-columns: 1fr;
    }
`;
export const Card = styled(motion.div)`
    display:flex;
    flex-direction: column;
    gap: 4px;
`;
export const Title = styled.h4`
    font-size: 18px;
`;
export const Image = styled.img`
    width: 100%;
    height:300px;
    border-radius: 10px;
    transition: 1s;
    background: #eaeaea;

    &:hover{
        scale: 1.02;
    }

    @media ${devices.mobile} {
        max-height: 400px;
    }
`;
export const Scale = styled.div`
    overflow: hidden;
    border-radius: 10px;
`;
export const Group = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;
export const Centered = styled.div`
    text-align: center;
`;
