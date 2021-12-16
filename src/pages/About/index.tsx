import React from 'react';
import PageContent from '../../components/PageContent';
import './index.scss';

const About : React.VFC = () => {
    return (
        <div className='about-page'>
            <PageContent header='About Me'>
                <p>I am a Full-Stack Software Engineer at <a href="https://www.rlicorp.com/">RLI Insurance</a>, building websites 
                    for our customers and underwriters. I graduated  in 2018 from Cornell University with a Masters of Engineering
                    in Computer Science. I also graduated from Cornell University in 2017 with a Bachelors of Science in Computer Science.
                    I enjoy learning new things and being constantly challenged.
                </p>
            </PageContent>
        </div>
    );
}

export default About;