import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useHistory } from "react-router-dom";
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
    max-width: 600px;
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
    width: 150px;
    left: calc(50% - 65px);
 
    animation: ${move} 6s linear infinite;
    &:hover {
        p { opacity: 1; }
    }
    p {
        opacity: 0;
        text-align: center;
    }
`
const Mouse = styled(motion.div)`
    margin: auto;
    height: 40px;
    width: 25px;
    border: 1px solid #fff;
    border-radius: 15px;
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

    const history = useHistory();



    useEffect(() => {
        let touchPos;
        window.addEventListener('wheel', (e) => {
            if (e.deltaY > 0 && history.location.pathname === '/') {

                history.push('/projects')
            }
        })
        window.ontouchstart = function (e) {
            touchPos = e.changedTouches[0].clientY;
        }
        window.ontouchmove = function (e) {
            if (e.changedTouches[0].clientY < touchPos && history.location.pathname === '/') {
                history.push('/projects')
            }
        }

    }, [history])


    return (
        <Wrapper>
            <motion.h1
                initial={{ y: '30px', fontSize: '2.1vmax', x: '-9px' }}
                animate={{ y: '40vh', fontSize: '6vmax' }}
                exit={{ y: '30px', fontSize: '2.1vmax', x: '-9px' }}
                transition={{ duration: 0.6 }}>
                AUGUST THORELL
            </motion.h1>
            <Content
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: .6 }}>
                <Description>
                    Hey! I’m August. Welcome to my portfolio.
                    I’m currently a Frontend Developer student
                    at Hyper Island who likes to build things.
                </Description>

            </Content>
            <MouseWrapper>
                <Mouse
                    initial={{ y: '1000px' }}
                    animate={{ y: '0' }}
                    exit={{ y: '1000px' }}
                    transition={{ duration: .6 }}>
                    <MouseWheel />
                </Mouse>
                <p>Scroll down to see some of my projects</p>
            </MouseWrapper>
        </Wrapper >
    )
}

export default Home
