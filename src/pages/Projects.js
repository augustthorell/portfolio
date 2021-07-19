import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ProjectTemplate from '../components/projectTemplate'
import { projectsData } from "../projectsData";
import { motion } from 'framer-motion'
import SliderIndicator from '../components/sliderIndicator';


const Wrapper = styled(motion.div)`
   position: fixed;
   @media (max-width: 800px) {
    margin: 0;
} 
`
const ProjectWrapper = styled.div`
position: relative;
overflow: hidden;
max-height: 600vh;
transition: 1s cubic-bezier(0.5, 0, 0.5, 1);
    @media (max-width: 800px) {
        padding: 10px 10px;
    }   
`

const Projects = () => {

    const [indicator, setIndicator] = useState(1);

    useEffect(() => {
        var pnls = document.querySelectorAll('.panel').length,
            scdir, hold = false;
        function _scrollY(obj) {
            var slength, plength, pan, step = 100,
                vh = window.innerHeight / 100,
                vmin = Math.min(window.innerHeight, window.innerWidth) / 100;

            if ((this !== undefined && this.id === 'well') || (obj !== undefined && obj.id === 'well')) {
                pan = this || obj;
                plength = parseInt(pan.offsetHeight / vh);
            }
            if (pan === undefined) {
                return;
            }
            if (pan.style.webkitTransform === 'translateY(-500vh)' && scdir === 'up') {
                return;
            }



            plength = plength || parseInt(pan.offsetHeight / vmin);
            slength = parseInt(pan.style.transform.replace('translateY(', ''));
            if (scdir === 'up' && Math.abs(slength) < (plength - plength / pnls)) { slength = slength - step; }
            else if (scdir === 'down' && slength < 0) { slength = slength + step; }
            else if (scdir === 'top') { slength = 0; }
            if (hold === false) {
                hold = true;
                pan.style.transform = 'translateY(' + slength + 'vh)';
                setTimeout(function () {
                    hold = false;
                    setIndicator((slength / -100) + 1);

                }, 1000);
            }
        }

        function _swipe(obj) {

            var swdir,
                sX,
                sY,
                dX,
                dY,
                threshold = 100,
                slack = 50,
                alT = 500,
                elT,
                stT;
            obj.addEventListener('touchstart', function (e) {
                console.log(e)
                var tchs = e.changedTouches[0];
                swdir = 'none';
                sX = tchs.pageX;
                sY = tchs.pageY;
                stT = new Date().getTime();

            }, false);

            obj.addEventListener('touchmove', function (e) {

                e.preventDefault();
            }, false);

            obj.addEventListener('touchend', function (e) {

                var tchs = e.changedTouches[0];
                dX = tchs.pageX - sX;
                dY = tchs.pageY - sY;
                elT = new Date().getTime() - stT;
                if (elT <= alT) {
                    if (Math.abs(dX) >= threshold && Math.abs(dY) <= slack) {
                        swdir = (dX < 0) ? 'left' : 'right';
                    } else if (Math.abs(dY) >= threshold && Math.abs(dX) <= slack) {
                        swdir = (dY < 0) ? 'up' : 'down';
                    }
                    if (obj.id === 'well') {
                        if (swdir === 'up') {
                            scdir = swdir;
                            _scrollY(obj);
                        } else if (swdir === 'down' && obj.style.transform !== 'translateY(0)') {
                            scdir = swdir;
                            _scrollY(obj);

                        }
                        e.stopPropagation();
                    }
                }
            }, false);
        }
        var well = document.getElementById('well');
        if (well === null) return;
        well.style.transform = 'translateY(0)';
        well.addEventListener('wheel', function (e) {
            if (e.deltaY < 0) {
                scdir = 'down';
            }
            if (e.deltaY > 0) {
                scdir = 'up';
            }
            e.stopPropagation();
        });
        well.addEventListener('wheel', _scrollY);
        _swipe(well);
    }, [])


    return (
        <>
            <Wrapper
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                exit={{ x: '100vw' }}
                transition={{ duration: .6 }}>
                <ProjectWrapper id='well'>
                    {projectsData.map(project => (<ProjectTemplate key={project.title} project={project} />))}
                </ProjectWrapper>
            </Wrapper>
            <SliderIndicator indicator={indicator} />
        </>

    )
}

export default Projects




