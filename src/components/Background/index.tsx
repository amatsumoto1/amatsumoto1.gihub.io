import React from 'react';
import SpiralBackground from './SpiralBackground';
import ParticleBackground from './ParticleBackground';
import ElectricBackground from './ElectricBackground';
import './index.scss';


const Background: React.VFC = () => {
    const BackgroundChoices = [
        < SpiralBackground />,
        < ParticleBackground />,
        <ElectricBackground />
    ];

    const chooseBackground = () : React.ReactNode => {
        const number = Math.floor(Math.random() * BackgroundChoices.length);
        return BackgroundChoices[number];
    }

    const background = chooseBackground();

    return (
        <div className='background'>
            { background }
        </div>
    )
}

export default Background;