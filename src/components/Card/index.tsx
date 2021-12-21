import React from 'react';
import './index.scss';

type CardProps = {
    title: string
    children?: React.ReactNode
}

const Card: React.FC<CardProps> = (props: CardProps) => {
    const { title, children } = props;

    return (
        <div className='card'>
            <h3 className='card__header'>{title}</h3>
            <div className='card__contents'>
                {children}
            </div>
        </div>
    )
}

export default Card;