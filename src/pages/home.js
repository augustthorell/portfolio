import React from 'react'
import { motion } from 'framer-motion'
import styled, { keyframes } from 'styled-components';


const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
`
const Content = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;    
`
const Description = styled.p`
    padding: 0 50px;
`
const move = keyframes`
  0%, 80%, 100% {
      transform: translate(0, 0px);
  }
  80% {
      transform: translate(0, 20px);
  }
`
const MouseWrapper = styled.div`
position: absolute;
bottom: 30px;
animation: ${move} 6s linear infinite;
&:hover {p{opacity: 1;}}
p {opacity: 0;}
`
const Mouse = styled.div`
position: relative;
height: 40px;
width: 25px;
border: 1px solid #fff;
border-radius: 15px;
left: 50%;
top: 50%;
transform: translate(-50%, -0%);
`
const MouseWheel = styled.div`
position: absolute;
height: 5px;
width: 2px;
top: 15%;
left: 50%;
transform: translate(-50%);
border: 1px solid #fff;
border-radius: 50%;
`

const Home = () => {

    return (
        <Wrapper>
            <motion.h1
                initial={{ y: '30px', fontSize: '3vmin', x: '-9px' }}
                animate={{ y: '40vh', fontSize: '10vmin' }}
                exit={{ y: '30px', fontSize: '3vmin', x: '-9px' }}
                transition={{ duration: 0.6 }}
            >AUGUST THORELL</motion.h1>

            <Content
                initial={{ x: 0 }}
                animate={{ x: 0 }}
                exit={{ x: 0 }}
                transition={{ duration: .6 }}
            >
                <Description>
                    Hey! I’m August. Welcome to my portfolio.
                    I’m currently a Frontend Developer student
                    at Hyper Island who likes to build things.
                </Description>
                <MouseWrapper>
                    <Mouse>
                        <MouseWheel />
                    </Mouse>
                    <p>Scroll to see some<br /> of my projects</p>
                </MouseWrapper>
            </Content>
        </Wrapper >
    )
}

export default Home
