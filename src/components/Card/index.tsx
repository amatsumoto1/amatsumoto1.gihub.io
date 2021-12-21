import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

type CardProps = {
    title: string
    children?: React.ReactNode
}

const Card: React.FC<CardProps> = (props: CardProps) => {
    const { title, children } = props;
    const [expanded, setExpanded] = useState(true);

    const toggleExpandCollapse = (e: React.MouseEvent) => {
        e.stopPropagation();
        setExpanded(!expanded);
    }

    return (
        <div className='card'>
            <div className='card__header-container'>
                <button type='button' className='card__expand-collapse' onClick={toggleExpandCollapse}>
                    <FontAwesomeIcon icon={expanded ?  faCaretDown : faCaretRight} />
                </button>
                <h2 className='card__header'>{title}</h2>
            </div>
            <div className={`card__contents ${expanded ? '' : 'card__contents--collapsed'}`}>
                {children}
            </div>
        </div>
    )
}

export default Card;