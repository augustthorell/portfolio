import React from 'react'
import ScrollSnap from 'scroll-snap'
import styled from 'styled-components'
import ProjectTemplate from '../components/projectTemplate'
import { projectsData } from "../projectsData";
import { motion } from 'framer-motion'
import SliderIndicator from '../components/sliderIndicator';

const Wrapper = styled(motion.div)`
    height: 100%;
    width: 100vw;
`
const ProjectWrapper = styled.div`
    height: 100vh;
    width: 100%;
    overflow: hidden;
    padding: 0 50px 0 50px;
    overflow-y: scroll;
    position: relative;
	
	transition: 1s cubic-bezier(0.5, 0, 0.5, 1);
    @media (max-width: 800px) {
        padding-top: 80px;
    }   
`

function callback() {
    console.log('snapped')
}

class Projects extends React.Component {
    container = React.createRef()

    bindScrollSnap() {
        const element = this.container.current
        const snapElement = new ScrollSnap(element, {
            snapDestinationY: '100vh',
        })

        snapElement.bind(callback)
    }

    componentDidMount() {
        this.bindScrollSnap()
    }

    render() {
        return (
            <Wrapper
                id='page'
                initial={{ x: '100vw' }
                }
                animate={{ x: 0 }}
                exit={{ x: '100vw' }}
                transition={{ duration: .6 }}>
                <ProjectWrapper ref={this.container} className='well' id='well' >
                    {projectsData.map(project => (
                        <ProjectTemplate key={project.title} project={project} />
                    ))}
                </ProjectWrapper>
                <SliderIndicator />
            </Wrapper>
        )
    }
}

export default Projects