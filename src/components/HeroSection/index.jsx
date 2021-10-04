import React, {useState} from 'react';
import * as Styled from './styles';
import Video from '../../assets/videos/video.mp4';
import {Button} from '../../styles/Button';

export default function HeroSection() {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <> 
        <Styled.HeroContainer>
            <Styled.HeroBg> 
                <Styled.VideoBg src={Video} type='video/mp4' autoPlay loop muted />
            </Styled.HeroBg>
            <Styled.HeroContent>
                <Styled.HeroH1>
                    Virtual Banking Made Easy
                </Styled.HeroH1>
                <Styled.HeroP>
                    Sign up for a new account today and receive $250 in credit towards your next payment.
                </Styled.HeroP>
                <Styled.HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary={true} dark={true}>
                        Get Started {hover ? <Styled.ArrowForward /> : <Styled.ArrowRight />}
                    </Button>
                </Styled.HeroBtnWrapper>
            </Styled.HeroContent>
        </Styled.HeroContainer>
        </>
    )
}
