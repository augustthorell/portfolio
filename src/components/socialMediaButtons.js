import React from 'react'
import '../style/socialMediaButtons.css'
import { FaGithub, FaInstagram, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa';


const SocialMediaButtons = ({ link }) => {


    return (
        <div style={{ position: 'relative' }}>
            <ul>
                <li className="instagram">
                    <a href={link}>
                        <span></span>
                        <span></span>
                        <span><FaGithub /></span>
                    </a>
                </li>
                <li className="linkedin">
                    <a href={link}>
                        <span></span>
                        <span></span>
                        <span><FaLinkedinIn /></span>
                    </a>
                </li>
                <li className="github">
                    <a href={link}>
                        <span></span>
                        <span></span>
                        <span><FaInstagram /></span>
                    </a>
                </li>
                <li className="email">
                    <a href={link}>
                        <span></span>
                        <span></span>
                        <span><FaRegEnvelope /></span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SocialMediaButtons
