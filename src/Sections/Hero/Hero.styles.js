import styled,{keyframes} from "styled-components";
import {devices} from "../../Styles/media";
import { motion } from "framer-motion";

export const HeroWrapper = styled.section`
position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff; 
`;
export const Slide = styled(motion.div)`
  position: absolute;
  inset: 0;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const Content = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2px;
    text-align: center;
    z-index:1;
`;
export const Title = styled(motion.h1)`
    font-size: 3rem;
    width: 70%;
    line-height: 1.2;
    color: #fff;

    @media ${devices.tablet}{
        width: 100%;
        font-size: 2.1rem;
    }
`;
export const Subtitle = styled(motion.p)`
    font-size: 18px;
    width: 90%;
    color: #fff;

     @media ${devices.tablet}{
        font-size: 15px;
    }
`;
export const Button = styled(motion.button)`
    background: #f6f9fe;
    color: black;
    border-radius: 5px;
    padding: 14px 20px;
    border: none;
    font-size: 18px;
    cursor: pointer;
    font-weight: 500;
    display: flex;
    align-items:center;
    gap: 5px;
`;
export const Icons = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
`;
export const Image = styled(motion.img)`
    width:20%;
    height: auto;
`;
export const Text = styled.p`
    font-size:12px;
    font-weight: 600;
    color: #000;
`;
