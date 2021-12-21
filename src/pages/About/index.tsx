import React from 'react';
import PageContent from '../../components/PageContent';
import Card from '../../components/Card';
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
                <section id="work-experience">
                    <Card title='Work Experience'>
                        <div className='job-info'>
                            <h4>RLI Insurance, Software Engineer</h4>
                            <div>2021-Present</div>
                        </div>
                        <div className='job-info'>
                            <h4>Boeing, RTOS Software Engineer II</h4>
                            <div>2018-2020</div>
                        </div>
                        <div className='job-info'>
                            <h4>Boeing, Software Engineering Intern</h4>
                            <div>2016</div>
                        </div>
                        <div className='job-info'>
                            <h4>Argon ST, Software Engineering Intern</h4>
                            <div>2015</div>
                        </div>
                        <div className='job-info'>
                            <h4>Cornell University, Teaching Assistant</h4>
                            <div>2015-2018</div>
                        </div>
                    </Card>
                </section>
            </PageContent>
        </div>
    );
}

export default About;