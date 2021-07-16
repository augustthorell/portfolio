import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useLocation } from "react-router-dom";
import '../style/extra.css'



const NavBar = styled.div`
padding: 30px;
width: 100vw;
height: 80px;
z-index: 2000;
position: fixed;

`
const NavList = styled.ul`
display:flex;
flex-direction: row;
justify-content: space-between;
a:nth-child(2) {
    opacity: 1;
}
`

const NavItem = styled(motion.button)`
background-color: transparent;
border: none;
color: #fff;
font-size: 2.1vmax;

&:hover {
    cursor: pointer;
}
`
const Nav = () => {

    const [isActive, setIsActive] = useState(true)
    let location = useLocation();


    useEffect(() => {
        if (location.pathname === '/') {
            setIsActive(true);
        } else {
            setIsActive(false)
        }
    }, [location.pathname])


    const variant = {
        active: {
            opacity: 0,
            transition: { delay: .39 },
            cursor: 'default'
        },
        inactive: {
            opacity: 1,
            transition: { delay: .5 },
            cursor: 'pointer'
        },
    }

    return (
        <NavBar>
            <NavList>
                <Link to='/about' className='hvr-underline-from-left'>
                    <NavItem>About</NavItem>
                </Link>

                <Link to='/' >
                    <NavItem
                        variants={variant}
                        animate={isActive ? 'active' : 'inactive'}
                    >AUGUST THORELL</NavItem>
                </Link>

                <Link to='/projects' className='hvr-underline-from-right'>
                    <NavItem>Projects</NavItem>
                </Link>
            </NavList>

        </NavBar>
    )
}

export default Nav
