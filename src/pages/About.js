import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components';
import Logo from '../assets/final.png'
import SocialMediaButtons from '../components/socialMediaButtons.js';

const Container = styled(motion.div)`
    height: 100vh;
    width: 100vw;
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
    @media (max-width: 1100px) {
        padding: 80px 25px 0 25px;
    }  
    p {
        text-align: left;
        max-width: 550px;
    }
`
const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    img {
       max-width: 100%;
       max-width: 450px;
       width: auto;
        @media (max-width: 700px) {
            max-width: 300px;
        } 
        @media (max-width: 1100px) {
            align-items: flex-end;
        }  
    }
`
const SocialMediaWrapper = styled.div`
    padding-top: 20px;
    width: auto;
    height: auto;
    margin: 0 auto;
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
                <Description>Hello!</Description>
                <p>
                    My name is August Thorell and I'm a frontend developer
                    living in Stockholm, Sweden where I'm currently studying at Hyper Island.
                    <br /> <br />
                    I'm very comfortable with frameworks such as React and Gatsby and I'm currently focusing a lot on Flutter and Dart.
                    I'm a curious person that likes to explore new ways of solving problems and finding clever solutions.
                    <br /> <br />
                    If you want to learn more about me you can visit my Github or Linkedin, or contact me through email.

                </p>
                <SocialMediaWrapper>
                    <SocialMediaButtons />
                </SocialMediaWrapper>
            </Wrapper>

        </Container>
    )
}

export default About
