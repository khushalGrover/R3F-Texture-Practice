// Hero.jsx
import React from 'react';
import Button from './Button'; // Import your custom Button component
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";

export function Hero() {

    const handleFirstButtonClick = () => {
        console.log('First button clicked');
      };
    
      const handleSecondButtonClick = () => {
        console.log('Second button clicked');
      };
    
      const handleThirdButtonClick = () => {
        console.log('Third button clicked');
      };


    return (
    <div className="flex w-full min-h-[800px] items-center justify-center border border-gray-200 border-gray-200">
        <div className="flex w-1/2 h-full items-center justify-center border-r border-gray-200 border-gray-200">
            <div className="flex flex-col gap-0.5 items-center justify-center">
                <Button size="lg" variant="outline" onClick={handleFirstButtonClick}>
                    First Button
                </Button>
                <Button size="lg" variant="outline" onClick={handleSecondButtonClick}>
                    Second Button
                </Button>
                <Button size="lg" variant="outline" onClick={handleThirdButtonClick}>
                    Third Button
                </Button>
            </div>
        </div>
        <div className="flex w-1/2 h-full items-center justify-center p-6">
            <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
                {/* <color attach="background" args={["#ececec"]} /> */}
                <Experience />
            </Canvas>
        </div>
    </div>
    );
};
