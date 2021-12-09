import React, { Fragment } from 'react';
import Background from '../Background';

const PageLayout: React.FC = (props) => {
    return (
        <Fragment>
            <Background />
            { props.children }
        </Fragment>
    )
}

export default PageLayout;