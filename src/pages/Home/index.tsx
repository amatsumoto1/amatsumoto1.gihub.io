import React from 'react';
import Header from '../../components/Header';
import PageLayout from '../../components/Layout/PageLayout';
import './index.scss';

const Home: React.VFC = () => {
    return (
        <div className='home-page'>
            <PageLayout>
                <Header />
            </PageLayout>
        </div>
    )
}

export default Home;