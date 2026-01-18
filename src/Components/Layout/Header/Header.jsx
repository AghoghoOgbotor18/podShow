import React, {useState} from 'react';
import {Navbar, Logo, Nav, Link, List, Lists, Button, Hamburger} from "./Header.styles"
import {FaBars, FaTimes} from "react-icons/fa"

const Header = () => {
    const [open, setOpen] = useState(false);
    
    return (
        <Navbar>
            <Logo>PodShow</Logo>
            
            <Nav>
                <List open={open}>
                    <Lists>
                        <Link href="#home" onClick={() => setOpen(!open)}>Home</Link>
                    </Lists>
                    <Lists>
                        <Link href="#about" onClick={() => setOpen(!open)}>About Us</Link>
                    </Lists>
                    <Lists>
                        <Link href="#trending" onClick={() => setOpen(!open)}>Trending</Link>
                    </Lists>
                    <Lists>
                        <Link href="#testimonials" onClick={() => setOpen(!open)}>Testimonials</Link>
                    </Lists>
                    <Lists>
                        <Link href="#contact" onClick={() => setOpen(!open)}>Contact</Link>
                    </Lists>
                </List>
            </Nav>
            <Hamburger onClick={() => setOpen(!open)}>
                {open ? <FaTimes size={22} /> : <FaBars size={22} />}
            </Hamburger>
            <Button>Join Us</Button>
        </Navbar>
    )
}

export default Header
