import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components';
import Logo from '../assets/final.png'
import SocialMediaButtons from '../components/socialMediaButtons.js';

const Container = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    padding: 100px 0 50px 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap-reverse;
`
const Description = styled.h1`
    font-size: 5vmax;
    padding-bottom: 10px;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column; 
    padding: 0 25px;
    p {
        text-align: left;
    }
`
const ImageWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;   
    @media (max-width: 800px) {
        align-items: flex-end;   
    }   
    img {
        width: 100%;
        max-width: 500px;
    }
`
const SocialMediaWrapper = styled.div`
    padding-top: 20px;
    width: auto;
    height: auto;
    margin: 0 auto;
    padding: 10px;
    position: relative;
`

const About = () => {



    return (
        <Container
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '-100vw' }}
            transition={{ duration: .6 }}>


            <ImageWrapper>
                <img src={Logo} alt='Illustration of me with a wierd mustache' />
            </ImageWrapper>

            <Wrapper>
                <Description>About me</Description>
                <p>This is a description about me which will contain more info in the future I hope</p>
                <SocialMediaWrapper>
                    <SocialMediaButtons />
                </SocialMediaWrapper>
            </Wrapper>

        </Container>
    )
}

export default About
