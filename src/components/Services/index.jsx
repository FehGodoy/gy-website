import React from 'react'
import * as Styled from './styles';
import Icon1 from '../../assets/images/car.svg';
import Icon2 from '../../assets/images/graph.svg';
import Icon3 from '../../assets/images/secure.svg';

export default function index() {
    return (
        <>
        <Styled.ServicesContainer>
            <Styled.ServicesH1>
                Our Services
            </Styled.ServicesH1>
            <Styled.ServicesWrapper>
                <Styled.ServicesCard>
                    <Styled.ServicesIcon src={Icon1} />
                    <Styled.ServicesH2>
                        Reduce expenses
                    </Styled.ServicesH2>
                    <Styled.ServicesP>
                        We help reduce your fess and increase your overall revenue.
                    </Styled.ServicesP>
                </Styled.ServicesCard>
                <Styled.ServicesCard>
                    <Styled.ServicesIcon src={Icon2} />
                    <Styled.ServicesH2>
                        Virtual Offices
                    </Styled.ServicesH2>
                    <Styled.ServicesP>
                        You can access our platform online anywhere in the world.
                    </Styled.ServicesP>
                </Styled.ServicesCard>
                <Styled.ServicesCard>
                    <Styled.ServicesIcon src={Icon3} />
                    <Styled.ServicesH2>
                        Premium Benefits
                    </Styled.ServicesH2>
                    <Styled.ServicesP>
                        Unlock our special membership card that return 5% cash back 
                    </Styled.ServicesP>
                </Styled.ServicesCard>
            </Styled.ServicesWrapper>
        </Styled.ServicesContainer>
        </>
    )
}
