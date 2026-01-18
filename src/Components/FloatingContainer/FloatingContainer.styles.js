import styled from "styled-components";
import { motion } from "framer-motion";
import { devices } from "../../Styles/media";

export const FloatingWrapper = styled(motion.div)`
  background: #fff;
  width: 65%;
  margin: -4rem auto 6rem;
  padding: 1.5rem 2.5rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0,0,0,0.15);
  position: relative;
  z-index: 5;

  @media ${devices.mobile} {
    width: 90%;
    margin: -4rem auto 4rem;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 1rem;
`;

export const Image = styled.img`
  width: 100px;

  @media ${devices.mobile} {
    width: 60px;
  }

  @media ${devices.tablet} {
    width: 45px;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #000;
`;
