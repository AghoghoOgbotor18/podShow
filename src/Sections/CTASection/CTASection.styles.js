import styled from "styled-components";
import { devices } from "../../Styles/media";
import {motion} from "framer-motion"
export const Section = styled(motion.section)`
    color: #fff;
    padding: 15px 20px;
    margin: 5rem auto;
    max-width: 1100px;

    @media ${devices.tablet} {
        margin: 5rem 1rem;
    }
`;
export const Content = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items:center;
    gap: 3rem;
    background-color: #121212;
    border-radius: 10px;
    padding: 15px 20px;
    
    @media ${devices.mobile} {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    
    @media ${devices.tablet} {

    }
`;
export const Form = styled(motion.form)`
    display:flex;
    align-items: center;
    
`;
export const Input = styled(motion.input)`
    border: 1px solid #e9e4e4ff;
    border-radius: 5px;
    background: transparent;
    color: #fff;
    padding: 11px 5px;
    width: 100%;
    max-width: 450px;
    font-size: 15px;
`;
export const Image = styled(motion.img)`
    width: 100%;
    max-width: 200px;
    height: auto;

    @media ${devices.mobile} {
        margin-top: 2rem;
    }
`;
export const Button = styled(motion.button)`
    background: #f6f9fe;
    color: black;
    border-radius: 0 5px 5px 0;
    padding: 10px 20px;
    border: none;
    font-size: 18px;
    cursor: pointer;
    font-weight: 500;
    display: flex;
    align-items:center;
    gap: 5px;
    margin-left: -3px;
`;
export const Subtitle = styled.h2`
    font-size: 30px;
    max-width: 500px;

    @media ${devices.mobile} {
        width: 100%;
        font-size: 24px;
    }

`;
export const Card = styled(motion.div)`
    display:flex;
    flex-direction: column;
    gap: 1.2rem;
`;