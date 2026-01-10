import styled from "styled-components";
import { devices } from "../../Styles/media";
export const AboutSection = styled.section`
    padding: 2rem;
    margin: 5rem 0;
`;
export const Content = styled.div`
    display: flex;
    justify-content: center;
    gap: 4rem;

    @media ${devices.tablet}{
        flex-direction:column;
    }
`;
export const Title = styled.h3`
    color: #111
`;
export const AboutUs = styled.div`
    display:flex;
    flex-direction: column;
    gap:10px;
`;
export const Subtitle = styled.h2`
    font-weight: 600;
    text-transform: uppercase;
`;
export const Text = styled.p`
    font-size: 15px;
`;
export const Brands = styled.div`
    display:flex;
    align-items:center;
    gap: 7px;
    font-weight: 600;
`;
export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
`;
export const Image = styled.img`
    width:100%;
    min-width:300px;
    height:auto;
    object-fit: cover;
    border-radius: 10px;
`;
export const Features = styled.div`
    display: flex;
    justify-content: center;
    gap:2rem;

    @media ${devices.mobile}{
        flex-direction:column;
    }
`;
export const Active = styled.div`
    display: inline-flex;
    background: #111;
    border-radius: 3px;
    padding: 10px;
    color: #fff;
`;
export const Followers = styled.div`
    display:flex;
    flex-direction: column;
    gap; 2px;
`;
export const Passports = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-left: -10px;
`;
export const Group = styled.div`
    display:flex;
    align-items:center;
    margin-left: 10px;
`;