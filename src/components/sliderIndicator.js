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
    }
    p:nth-child(2) {
        
    }
`
const Indicator = styled(motion.p)`
`


const SliderIndicator = ({ indicator }) => {

    return (
        <Slider>
            <Indicator>{indicator}</Indicator><p>|</p><p>6</p>
        </Slider>
    )
}

export default SliderIndicator
