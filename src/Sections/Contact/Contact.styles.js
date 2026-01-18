import styled from "styled-components";
import { devices } from "../../Styles/media";
import { motion } from "framer-motion";
export const ContactSection = styled.section`
    background: #f4f4f4;
    padding-top: 30px;
    color: #000;
    padding: 3rem 1.5rem;
    overflow-x: hidden;
`;
export const Form = styled(motion.form)`
    display:flex;
    flex-direction:column;
    gap: 8px;
    width: 100%;
`;
export const Input = styled(motion.input)`
    width: 100%;
    height: 45px;
    padding: 0 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 14px;

    &:focus {
        outline: none;
        border-color: #121212;
    }
`;
export const Textarea = styled(motion.textarea)`
    width: 100%;
    min-height: 120px;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 14px;
    resize: none;

    &:focus {
        outline: none;
        border-color: #121212;
    }
`;
export const Inputs = styled.div`
    display:flex;
    gap: 3px;
`;
export const Image = styled.img`
    width:100%;
    height: 500px;
    border-radius: 10px;

    @media ${devices.mobile} {
        
        height: 600px;
    }
    
    @media ${devices.tablet} {
        width: 100%;
        height: 600px;
    }
`;
export const Info = styled.div`
    display:flex;
    flex-direction: column;
    gap:2px;
`;