import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: grid;
    margin: auto 0;
    grid-template-columns: repeat(2, 50%);
    @media (max-width: 800px) {
          grid-template-columns: 100%;
          
      }
`
const TextContainer = styled(motion.div)`
    align-self: center;
    justify-self: center;
    width: 100%;
    max-width: 600px;
    text-align: left;
    padding-left: 50px;
    h1 {
        text-transform: uppercase;
        font-size: 2.5rem;
        margin-bottom: 15px;
    }
    Button {   
        width: 100%;
        min-width: 150px;
    }
    @media (max-width: 800px) {
        padding-left: 0;
        h1 { text-align: center; }
        p { 
            margin: 0 auto;
            width: 90%
        }
        
    }
    
`
const ModelWrapper = styled.div`
align-self: center;
justify-self: center;
img {
    width: 100%;
}
@media (max-width: 800px) {
    height: 100%;
}
`
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    width: 100%;
    a {
        margin-right: 15px;
    }
    @media (max-width: 800px) {
        justify-content: center;
        margin-right: 0;
    }
`
const Button = styled.button`
    margin-top: 25px;
    padding: 15px;
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 50px;
    color: #fff;
    text-align: center;
    &:hover {
        border: 2px solid #fff;
        cursor: pointer;
    }
`

const ProjectTemplate = ({ project }) => {


    let SiteButton;
    let GithubButton;

    if (project.websiteLink) {
        SiteButton = (
            <a href={project.websiteLink}>
                <Button>See deployed site</Button>
            </a>
        )
    }
    if (project.githubLink) {
        GithubButton = (
            <a href={project.githubLink}>
                <Button>See project on Github</Button>
            </a>
        )
    }

    return (
        <>
            <Container className='panel'>
                <TextContainer>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                    <ButtonWrapper>
                        {GithubButton}
                        {SiteButton}
                    </ButtonWrapper>
                </TextContainer>
                <ModelWrapper>
                    <img src={project.image} alt={project.altText} />
                </ModelWrapper>
            </Container>
        </>
    )
}

export default ProjectTemplate
