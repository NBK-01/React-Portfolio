import React from 'react'
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarWrapper, NavLogo, IconMobile, NavItems, Item, NavLinks} from './NavEl';


const Navbar = () => {
    return (
        <>
            <Nav> 
                <NavbarWrapper>  
                    <NavLogo> Design Portfolio </NavLogo>
                    <IconMobile> 
                        <FaBars />   
                    </IconMobile>
                    <NavItems>
                        <Item>
                            <NavLinks to="about"> About </NavLinks>
                        </Item>
                        <Item>
                            <NavLinks to="portfolio"> Portfolio </NavLinks>
                        </Item>
                        <Item>
                            <NavLinks to="skill"> Skills </NavLinks>
                        </Item>
                    </NavItems>
                </NavbarWrapper>
            </Nav>
        </>
    )
}

export default Navbar
