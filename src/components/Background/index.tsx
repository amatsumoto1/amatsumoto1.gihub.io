import React, { Fragment, useState } from 'react';
import SpiralBackground from './SpiralBackground';
import ParticleBackground from './ParticleBackground';
import ElectricBackground from './ElectricBackground';
import BackgroundSelector from './BackgroundSelector';
import CheckeredBackground from './CheckeredBackground';
import './index.scss';


const BackgroundChoices: {[key: string]: React.ReactNode}  = {
    spiral: < SpiralBackground />,
    particle: < ParticleBackground />,
    electric: < ElectricBackground />,
    checkered: <CheckeredBackground />
};

const Background: React.VFC = () => {
    const chooseRandomBackground = () : string => {
        const backgroundNames = Object.keys(BackgroundChoices);
        const index = Math.floor(Math.random() * backgroundNames.length);
        return backgroundNames[index];
    }

    const [background, setBackground] = useState(chooseRandomBackground());

    const onBackgroundSelected = (newBackground: string) => {
        setBackground(newBackground);
    }

    return (
        <Fragment>
            <div className='background'>
                { BackgroundChoices[background] }
            </div>
                <BackgroundSelector
                    backgrounds={Object.keys(BackgroundChoices)}
                    onBackgroundSelect={onBackgroundSelected}
                    active={background} />
        </Fragment>
    )
}

export default Background;