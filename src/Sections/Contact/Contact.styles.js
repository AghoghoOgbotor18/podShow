import styled from "styled-components";
import { devices } from "../../Styles/media";

export const ContactSection = styled.section`
    background: #f4f4f4;
    color: #000;
    padding: 1.5rem;
`;
export const Form = styled.form`
    display:flex;
    flex-direction:column;
    gap: 8px;
    width: 100%;
`;
export const Input = styled.input`
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
export const Textarea = styled.textarea`
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
    width:80%;
    height: 100%;
    max-height: 40%;
    border-radius: 10px;

    @media ${devices.mobile} {
        width: 100%;
        height: 500px;
    }
    
    @media ${devices.tablet} {
        width: 80%;
        height: 500px;
    }
`;
export const Info = styled.div`
    display:flex;
    flex-direction: column;
    gap:2px;
`;