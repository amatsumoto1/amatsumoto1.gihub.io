import React from 'react';
import './index.scss';

type PageContentProps = React.PropsWithChildren<{
  header: string,
}>;

const PageContent: React.FC<PageContentProps> = ({header, children}: PageContentProps) => {
  return (
    <div className='page-content'>
      <h1 className='page-content__header'>
        <span className='page-content__header__text'>{header}</span>
      </h1>
      { children }
    </div>
  );
}

export default PageContent;