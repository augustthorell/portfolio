import React, { useRef, Suspense } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import Model3 from './gltf-models/Testrun3.js'
import GameSite from './gltf-models/Game-site.js'
import Pomodoro from './gltf-models/Pomodoro.js'


extend({ OrbitControls });

const Controls = () => {
    const orbitRef = useRef();
    const { camera, gl } = useThree();
    useFrame(() => {
        orbitRef.current.update()
    })
    return (
        <orbitControls
            maxPolarAngle={Math.PI / 2} // Change viewing angle here
            minPolarAngle={Math.PI / 2}
            maxAzimuthAngle={Math.PI / 4}
            minAzimuthAngle={-Math.PI / 4} // And here
            args={[camera, gl.domElement]}
            ref={orbitRef}
            enableZoom={false}
            enablePan={false}
        />
    )
}

const renderModel = (mod) => {
    switch (mod) {
        case 'Pomodoro App':
            return <Pomodoro />;
        case 'Ricola':
            return <Model3 />;
        case 'Femart':
            return <Model3 />;
        case 'Habit Tracker':
            return <Model3 />;
        case 'The Perfect Night':
            return <Model3 />;
        case 'Game Site':
            return <GameSite />;
        default:
            return 'foo';
    }
}

const ModelHandler = ({ mod }) => {
    return (
        <>
            <Canvas camera={{ position: [400, 50, 500] }} id="ModelHandler"  >
                <ambientLight intensity={1.0} />
                <spotLight position={[100, 200, 100]} penumbra={1} />
                <Controls />
                <Suspense fallback={null}>
                    {renderModel(mod)}
                </Suspense>
            </Canvas>
        </>
    )
}

export default ModelHandler