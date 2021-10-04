import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import * as Styled from './styles';
import { FaFacebook,FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function index() {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <>
            <Styled.FooterContainer>
                <Styled.FooterWrap>
                    <Styled.FooterLinksContainer>
                        <Styled.FooterLinksWrapper>
                            <Styled.FooterLinksItems>
                                <Styled.FooterLinkTitle>
                                    About Us
                                </Styled.FooterLinkTitle>
                                <Styled.FooterLink to="/">
                                        About us
                                </Styled.FooterLink>
                                <Styled.FooterLink to="/">
                                    How it Works
                                </Styled.FooterLink>
                                <Styled.FooterLink to="/">
                                    Testimonials
                                </Styled.FooterLink>
                                <Styled.FooterLink to="/">
                                    Carrers
                                </Styled.FooterLink>
                                <Styled.FooterLink to="/">
                                    Investors
                                </Styled.FooterLink>
                                <Styled.FooterLink to="/">
                                    Terms of Service
                                </Styled.FooterLink>
                            </Styled.FooterLinksItems>
                            <Styled.FooterLinksItems>
                                <Styled.FooterLinkTitle>
                                        Contact Us
                                </Styled.FooterLinkTitle>
                                <Styled.FooterLink to="/">
                                        Contact
                                </Styled.FooterLink>
                                <Styled.FooterLink to="/">
                                    Support
                                </Styled.FooterLink>
                                <Styled.FooterLink to="/">
                                    Destinations
                                </Styled.FooterLink>
                            </Styled.FooterLinksItems>
                            <Styled.FooterLinksItems>
                                <Styled.FooterLinkTitle>
                                    Videos
                                </Styled.FooterLinkTitle>
                                <Styled.FooterLink to="/">
                                        Submit Video
                                </Styled.FooterLink>
                                <Styled.FooterLink to="/">
                                    Ambassadors
                                </Styled.FooterLink>
                                <Styled.FooterLink to="/">
                                    Agency
                                </Styled.FooterLink> 
                                <Styled.FooterLink to="/">
                                    Influencer
                                </Styled.FooterLink>                                
                            </Styled.FooterLinksItems>
                            <Styled.FooterLinksItems>
                                <Styled.FooterLinkTitle>
                                    Social Media
                                </Styled.FooterLinkTitle>
                                <Styled.FooterLink to="/">
                                    Instagram
                                </Styled.FooterLink>
                                <Styled.FooterLink to="/">
                                    Facebook
                                </Styled.FooterLink>
                                <Styled.FooterLink to="/">
                                    Youtube
                                </Styled.FooterLink>
                                <Styled.FooterLink to="/">
                                    Twitter
                                </Styled.FooterLink>
                            </Styled.FooterLinksItems>
                        </Styled.FooterLinksWrapper>
                    </Styled.FooterLinksContainer>
                    <Styled.SocialMedia>
                        <Styled.SocialMediaWrap>
                            <Styled.SocialLogo to="/" onClick={toggleHome}>
                                gy
                            </Styled.SocialLogo>
                            <Styled.WebsiteRights>
                                gy © {new Date().getFullYear()} All rights reserved.
                            </Styled.WebsiteRights>
                            <Styled.SocialIcons>
                                <Styled.SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                    <FaFacebook />
                                </Styled.SocialIconLink>
                                <Styled.SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                    <FaInstagram />
                                </Styled.SocialIconLink>
                                <Styled.SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                    <FaYoutube />
                                </Styled.SocialIconLink>
                                <Styled.SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                    <FaTwitter />
                                </Styled.SocialIconLink>
                                <Styled.SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                    <FaLinkedin />
                                </Styled.SocialIconLink>
                            </Styled.SocialIcons>
                        </Styled.SocialMediaWrap>
                    </Styled.SocialMedia>
                </Styled.FooterWrap>
            </Styled.FooterContainer>
        </>
    )
}
