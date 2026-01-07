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
                        <Link>Home</Link>
                    </Lists>
                    <Lists>
                        <Link>About</Link>
                    </Lists>
                    <Lists>
                        <Link>Features</Link>
                    </Lists>
                    <Lists>
                        <Link>Contact</Link>
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
