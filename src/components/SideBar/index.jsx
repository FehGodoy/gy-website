import React from 'react'
import * as Styled from './styles';

export default function Sidebar({isOpen, toggle}) {
    return (
        <> 
            <Styled.SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Styled.Icon onClick={toggle}>
                    <Styled.CloseIcon />
                </Styled.Icon>
                <Styled.SidebarWrapper>
                    <Styled.SidebarMenu>
                        <Styled.SidebarLink to="about" onClick={toggle}>
                            About
                        </Styled.SidebarLink>
                        <Styled.SidebarLink to="discover" onClick={toggle}>
                            Discover
                        </Styled.SidebarLink>
                        <Styled.SidebarLink to="services" onClick={toggle}>
                            Services
                        </Styled.SidebarLink>
                        <Styled.SidebarLink to="signup" onClick={toggle}>
                            Sign Up
                        </Styled.SidebarLink>
                    </Styled.SidebarMenu>
                    <Styled.SideBtnWrap>
                        <Styled.SidebarRouter to="/signin">
                            Sign In
                        </Styled.SidebarRouter>
                    </Styled.SideBtnWrap>
                </Styled.SidebarWrapper>
            </Styled.SidebarContainer>
        </>
    )
}
