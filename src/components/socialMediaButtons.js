import React from 'react'
import styled from 'styled-components';
import { FaGithub, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa';

const Container = styled.div`
    position: relative;
`
const List = styled.li`
    position: relative;
    list-style: none;
    width: 60px;
    height: 60px;
    margin: 20px;
    float:left;
    &:hover span {
        z-index: 1000;
        transition: .3s;
        color: #fff;
        box-shadow: -1px 1px 1px rgba(0, 0, 0, .5);
        
          &:nth-child(3){
            transform: translate(20px, -20px);
            opacity: .6;
          }
          &:nth-child(2){
            transform: translate(10px, -10px);
            opacity: .4;
          }
          &:nth-child(1){
            transform: translate(0px, 0px);
            opacity: .2;
          }
    }
    &:nth-child(1):hover span{
        background: #52E19F !important;
      }
    &:nth-child(2):hover span{
        background: #EA6E96 !important;
      }
    &:nth-child(3):hover span{
        background: #2C3456 !important;
      }
    span {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex !important;
        background: #2a2a2a;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 30px !important;
        transition: 1.5s ease-out;

    }
    &:hover span {
        z-index: 1000;
        transition: .3s;
        color: #fff;
        box-shadow: -1px 1px 1px rgba(0, 0, 0, .5);
    }
`
const Email = styled.p`
    font-size: 15px;
    position: absolute;
    padding-left: 9px;
    transition: 1s ease-in-out;
    text-align: right;
    display: none;
    opacity: 1;
`




function copyText() {
    const copied = document.getElementById('emailCopied');
    const icon = document.getElementById('emailIcon');
    copied.style.opacity = '1'
    icon.style.display = '0'
    copied.style.display = 'block'
    icon.style.display = 'none'
    const text = 'augustthorell@gmail.com';
    let textArea = document.createElement('textarea');
    textArea.width = "0px";
    textArea.height = "0px";
    textArea.background = "transparents";
    textArea.value = text;
    document.body.append(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    setTimeout(() => {
        setIconBack(copied, icon)
    }, 2000)
}

function setIconBack(copied, icon) {
    copied.style.opacity = '0'
    icon.style.display = '1'

    setTimeout(() => {
        copied.style.display = 'none'
        icon.style.display = 'block'
    }, 1000)
}


const SocialMediaButtons = () => {


    return (
        <Container>
            <ul>
                <List >
                    <a href='https://github.com/augustthorell' role='button'>
                        <span />
                        <span />
                        <span><FaGithub /></span>
                    </a>
                </List>
                <List >
                    <a href='https://www.linkedin.com/in/augustthorell/' role='button'>
                        <span />
                        <span />
                        <span><FaLinkedinIn /></span>
                    </a>
                </List>
                <List >
                    <div role='button' onClick={copyText}>
                        <span />
                        <span />
                        <span><FaRegEnvelope id='emailIcon' /><Email id="emailCopied">Email adress copied</Email></span>
                    </div>
                </List>

            </ul>
        </Container>
    )
}

export default SocialMediaButtons