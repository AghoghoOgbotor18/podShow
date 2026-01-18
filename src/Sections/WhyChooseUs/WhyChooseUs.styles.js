import styled from "styled-components";
import { devices } from "../../Styles/media";
import { motion } from "framer-motion";
export const Section = styled.section`
    padding: 1.5rem;
    margin: 5rem 0;
    overflow-x: hidden;
`;
export const Box = styled(motion.div)`
    display:flex;
    flex-direction: column;
    gap:10px;
    width: 100%;
    max-width: 400px;

    @media ${devices.tablet} {
        max-width: 100%;
    }
`;
export const Faq = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  padding: 1rem 1.2rem;
  border-radius: 12px;

  background: #ffffff;
  color: #121212;

  border: 1px solid rgba(0, 0, 0, 0.06);

  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.04),
    0 2px 6px rgba(0, 0, 0, 0.02);

  transition: 
    box-shadow 0.3s ease,
    transform 0.25s ease,
    border-color 0.25s ease;

  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(0, 0, 0, 0.1);
    box-shadow: 
      0 8px 24px rgba(0, 0, 0, 0.08),
      0 4px 10px rgba(0, 0, 0, 0.04);
  }
`;
export const Question = styled.h4`
    font-size: 15px;
    font-weight: 600;
`;
export const Answer = styled.p`
    font-size: 14px;
    line-height: 1.6;
    color: #555;
`;
export const Faqs = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: space-between;
`;