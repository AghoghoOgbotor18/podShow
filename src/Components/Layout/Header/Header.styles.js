import styled from "styled-components";
import { devices } from "../../../Styles/media";
export const Navbar = styled.header`
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 15px;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.06);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

`;
export const Logo = styled.h1`
    font-family: "Dancing Script", cursive;
    font-size: 2.2rem;
    font-weight: 1000;
    color: #fff;
`;
export const Nav = styled.nav`
    padding: 5px;
`;
export const List = styled.ul`
    display:flex;
    gap:2rem;
    padding: 3px;
    list-style: none;

    @media ${devices.tablet}{
       position: fixed;
        top: 50px;
        left: 0;
        width: 100%;
        height: 100vh;
        flex-direction: column;
        align-items:center;
        background: #131313;
        color: #fff;
        padding: 2rem;
        display: ${({ open }) => (open ? "flex" : "none")};
        z-index: 999;
        transition: 5s;
    }
`;
export const Lists = styled.li`
    font-size: 16px;
    padding: 3px;
`;
export const Link = styled.a`
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  @media ${devices.tablet} {
    color: #fff;
    font-size: 18px;
  }
`;

export const Button = styled.button`
    background-color: #fff;
    color: #121212;
    border-radius: 5px;
    padding: 10px 20px;
    border: none;
    font-size: 16px;
    cursor: pointer;

    &:hover{
        background-color: #f2f2f2;
    }
    
    @media ${devices.tablet}{
        display:none;
    }
`;
export const Hamburger = styled.div`
    display: none;
    cursor: pointer;
    z-index: 1001;
    color: #fff;

    @media ${devices.tablet} {
        display: block;
    }
`;
