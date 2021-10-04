import React, {useState,useEffect} from "react";
import * as Styled from "./styles";
import { FaBars } from 'react-icons/fa';
import {IconContext} from 'react-icons';
import {animateScroll as scroll} from 'react-scroll';

export default function Header({toggle}){

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () =>{
        if (window.scrollY >= 80) {
            setScrollNav(true)            
        } else{
            setScrollNav(false)
        }
    }; 

    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return(
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <Styled.Nav scrollNav={scrollNav}>
            <Styled.NavbarContainer>
                <Styled.NavLogo to="/" onClick={toggleHome}>
                    gy
                </Styled.NavLogo>
                <Styled.MobileIcon onClick={toggle}>
                    <FaBars />
                </Styled.MobileIcon>
                <Styled.NavMenu>
                    <Styled.NavItem>
                        <Styled.NavLinks 
                        to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}                        
                        >About</Styled.NavLinks>
                    </Styled.NavItem>
                    <Styled.NavItem>
                        <Styled.NavLinks
                         to="discover"
                         smooth={true}
                         duration={500}
                         spy={true}
                         exact='true'
                         offset={-80}>Discover</Styled.NavLinks>
                    </Styled.NavItem>
                    <Styled.NavItem>
                        <Styled.NavLinks 
                        to="services"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Services</Styled.NavLinks>
                    </Styled.NavItem>
                    <Styled.NavItem>
                        <Styled.NavLinks 
                        to="signup"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80} 
                        >Sign Up</Styled.NavLinks>
                    </Styled.NavItem>
                </Styled.NavMenu>
                <Styled.NavBtn>
                    <Styled.NavBtnLink to="/signin">
                        Sign In
                    </Styled.NavBtnLink>
                </Styled.NavBtn>
            </Styled.NavbarContainer>
        </Styled.Nav>
        </IconContext.Provider> 
        </>
    )
}