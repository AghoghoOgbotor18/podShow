import styled from "styled-components";
import { devices } from "../../Styles/media";

export const TestimonialSection = styled.section`
  margin: 4rem 1.5rem;
  text-align: center;
`;

export const TestimonialContainer = styled.div`
  width: 100%;
  max-width: 950px;
  margin: 2rem auto;
  overflow: hidden;

  @media ${devices.tablet}{
    max-width: 630px;
  }

  @media ${devices.tablet}{
    max-width: 300px;
  }
`;

export const TestimonialCards = styled.div`
  display: flex;
  gap: 20px;
  transition: transform 0.6s ease-in-out;
`;

export const TestimonialCard = styled.div`
  background: #ffffff;
  color: #121212;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow:
    0 6px 18px rgba(0, 0, 0, 0.05),
    0 2px 6px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 14px;
  min-width: 300px;
  padding: 20px;
`;

export const Identity = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

export const Image = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Names = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Name = styled.h4`
  font-weight: 600;
  font-size: 15px;
  margin: 0;
`;

export const Role = styled.p`
  font-size: 13px;
  opacity: 0.7;
  margin: 0;
`;

export const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 1.5rem;
`;

export const Dot = styled.span`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${({ active }) => (active ? "#121212" : "#d9d9d9")};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;
