import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

type CardProps = {
  title: string,
  children?: React.ReactNode
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  const { title, children } = props;
  const [expanded, setExpanded] = useState(true);
  const [maxHeight, setMaxHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const toggleExpandCollapse = (e: React.MouseEvent) => {
    e.stopPropagation();
    setExpanded(!expanded);
  }

  useEffect(() => {
    const height = ref.current?.scrollHeight || 0;
    setMaxHeight(height);
    setExpanded(false);
  }, [setMaxHeight]);

  return (
    <div className='card'>
      <div className='card__header-container'>
        <button type='button' 
          className='card__expand-collapse'
          aria-label={expanded ? 'Collapse Section' : 'Expand Section'}
          onClick={toggleExpandCollapse}
        >
          <FontAwesomeIcon
            icon={faCaretDown}
            className={`card__expand-collapse-icon ${expanded ? '' : 'card__expand-collapse-icon--collapsed'}`}
          />
        </button>
        <h2 className='card__header'>{title}</h2>
      </div>
      <div ref={ref} style={{height: expanded? maxHeight : 0}} className={`card__contents ${expanded ? '' : 'card__contents--collapsed'}`}>
        {children}
      </div>
    </div>
  );
}

export default Card;