import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components';
import Logo from '../assets/final.png'
import SocialMediaButtons from '../components/socialMediaButtons.js';


const Container = styled(motion.div)`
height: 100vh;
width: 100vw;
padding: 100px 50px 0 50px;
display: flex;
justify-content: center;
flex-wrap: wrap-reverse;
`

const Description = styled.h2``

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

p {
    text-align: left;
}
`

const ImageWrapper = styled.div`
height: 50vh;
width: 50vw;
img {
    height: 100%;
}
`
const SocialMediaWrapper = styled.div`
   align-items: center;
`
const About = () => {
    return (
        <Container
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '-100vw' }}
            transition={{ duration: .6 }}>

            <Wrapper>
                <ImageWrapper>
                    <img src={Logo} alt='Illustration of me with a wierd mustache' />
                </ImageWrapper>
            </Wrapper>
            <Wrapper>

                <Description>Hello hello</Description>
                <p>This is a description about me which will contain more info in the future I hope</p>

                <SocialMediaWrapper>
                    <SocialMediaButtons link={'FaGithub'} />
                </SocialMediaWrapper>
            </Wrapper>





        </Container>
    )
}

export default About
