import React from 'react';
import * as Styled from './styles';

export default function index() {
    return (
        <>
        <Styled.Container>
            <Styled.FormWrap>
                <Styled.Icon to="/"> gy </Styled.Icon>
                <Styled.FormContent>
                    <Styled.Form action="#">
                        <Styled.FormH1>
                            Sign in to your account
                        </Styled.FormH1>
                        <Styled.FormLabel htmlFor='for'>
                            Email
                        </Styled.FormLabel>
                        <Styled.Input type='email' required />                            
                        <Styled.FormLabel htmlFor='for'>
                            Password
                        </Styled.FormLabel>
                        <Styled.Input type='password' required />                  
                        <Styled.FormButton type='submit'>
                            Continue
                        </Styled.FormButton>          
                        <Styled.Text>
                            Forgot Password
                        </Styled.Text>
                    </Styled.Form>
                </Styled.FormContent>
            </Styled.FormWrap>
        </Styled.Container>
        </>
    )
}
