import styled from "styled-components";
import heroBg from "../../assets/Images/hero-bg.jpg";
import {devices} from "../../Styles/media"
export const HeroWrapper = styled.section`
    background-image: url(${heroBg});
    background-size: cover;
    background-position:center;
    background-repeat: no-repeat;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items:center;
    position: relative;
    color: #ffffff;
    margin-top: 15px;

    &::before{
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.6);
    }

    @media ${devices.tablet} {
        background-position:bottom left;
    }
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2px;
    text-align: center;
    z-index:1;
`;
export const Title = styled.h1`
    font-size: 3rem;
    width: 70%;
    line-height: 1.2;

    @media ${devices.tablet}{
        width: 100%;
        font-size: 2.1rem;
    }
`;
export const Subtitle = styled.p`
    font-size: 18px;
    width: 90%;

     @media ${devices.tablet}{
        font-size: 15px;
    }
`;
export const Button = styled.button`
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
export const Container = styled.div`
    background: white;
    padding: 15px 2.5rem;
    position: absolute;
    bottom: -12%;
    left: 0;
    border-radius: 20px;
    width: 65%;
    transform: translateX(29%); 
    text-align: center;

    @media ${devices.tablet}{
        bottom: -5%;
        width:90%;
        transform: translateX(5%); 
        padding: 15px 3rem;
    }
`;
export const Icons = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
`;
export const Image = styled.img`
    width:20%;
    height: auto;
`;
export const Text = styled.p`
    font-size:12px;
    font-weight: 600;
    color: #000;
`;
