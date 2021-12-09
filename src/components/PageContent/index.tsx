import React from 'react';
import './index.scss';

const PageContent: React.FC = (props) => {
    return (
        <div className='page-content'>
            { props.children }
        </div>
    )
}

export default PageContent;