import React from 'react';
import PageContent from '../../components/PageContent';
import Card from '../../components/Card';
import './index.scss';

const About : React.VFC = () => {
  return (
    <div className='about-page'>
      <PageContent header='About Me'>
        <p>I am a Full-Stack Software Engineer at <a href='https://www.rlicorp.com/'>RLI Insurance</a>, building websites 
           for our customers and underwriters. I graduated  in 2018 from Cornell University with a Masters of Engineering
           in Computer Science. I also graduated from Cornell University in 2017 with a Bachelors of Science in Computer Science.
           I enjoy learning new things and being constantly challenged.
        </p>
        <section id='work-experience'>
          <Card title='Work Experience'>
            <div className='job-info'>
              <h3>RLI Insurance, Software Engineer</h3>
                <div><i>2021-Present</i></div>
            </div>
            <div className='job-info'>
              <h3>Boeing, RTOS Software Engineer II</h3>
                <div><i>2018-2020</i></div>
            </div>
            <div className='job-info'>
              <h3>Boeing, Software Engineering Intern</h3>
                <div><i>2016</i></div>
            </div>
            <div className='job-info'>
              <h3>Argon ST, Software Engineering Intern</h3>
                <div><i>2015</i></div>
            </div>
            <div className='job-info'>
              <h3>Cornell University, Teaching Assistant</h3>
                <div><i>2015-2018</i></div>
            </div>
          </Card>
        </section>
        <section id='education'>
          <Card title='Education'>
            <div className='education-info'>
              <h3>Cornell University, Masters of Engineering, Computer Science</h3>
              <div><i>2017-2018</i></div>
            </div>
            <div className='education-info'>
              <h3>Cornell University, Bachelors of Science, Computer Science</h3>
              <div><i>2013-2017</i></div>
            </div>
          </Card>
        </section>
      </PageContent>
    </div>
  );
}

export default About;