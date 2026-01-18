import styled from "styled-components";
import { devices } from "../../../Styles/media";
import { motion } from "framer-motion";
export const FooterSection = styled.section`
    background: #121212;
    color: #fff;
`;
export const Title = styled(motion.h1)`
    font-weight: bolder;
    font-size: 40px;

`;
export const Text = styled(motion.p)`
    font-size: 14px;
`;
export const Subtitle = styled(motion.h3)`
    font-weight: 600;
    font-size: 18px;
`;
export const Lists = styled(motion.ul)`
    display:flex;
    flex-direction: column;
    gap: 6px;
`;
export const List = styled(motion.li)`
    font-size: 12px;
    margin-left: 15px;
`;
export const Content = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
    gap: 1rem;

    @media ${devices.mobile}{
        flex-direction: column;
        justify-content: center;
    }
`;
export const Box = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
`;
export const Feature = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-basis: 30%;
`;
export const Brands = styled(motion.div)`
    display: flex;
    gap: 1.5rem;
    font-weight: 600;
    margin-top: 7px;
    
`;
export const Brand = styled(motion.h4)`
    font-size: 16px;
`;
export const Line = styled(motion.hr)`
    border: 1px solid rgba(255, 255, 255, 0.8);
`;
export const Icon = styled(motion.div)`
    display:flex;
    gap: 18px;

`;
export const Copyright = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 1rem;

    @media ${devices.mobile} {
        flex-direction: column;
        align-items: center;
    }
`;