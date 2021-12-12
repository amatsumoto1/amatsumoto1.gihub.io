import React from 'react';
import PageContent from '../../components/PageContent';
import './index.scss';

const Home: React.VFC = () => {
    return (
        <div className='home-page'>
            <PageContent>
                <div className='home-page__wrapper'>
                    <h1 className='home-page__header'>
                        <span className='home-page__header__text'>Andrew Matsumoto</span>
                    </h1>
                    <h2 className='home-page__subheader'>
                        <span className='home-page__subheader__text'>Passionate About Developing Smart, Customer-Oriented Solutions.</span>
                    </h2>
                </div>
            </PageContent>
        </div>
    )
}

export default Home;