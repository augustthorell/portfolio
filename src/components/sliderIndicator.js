import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'



const Slider = styled(motion.div)`
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    p {
        padding: 5px;
        color: rgba(250,250,250,.8)
    }
    @media (max-width: 800px) {
        left: 90%;
    }
    
`


const SliderIndicator = ({ indicator }) => {

    return (
        <Slider>
            <p>{indicator}</p><p>|</p><p>6</p>
        </Slider>
    )
}

export default SliderIndicator
