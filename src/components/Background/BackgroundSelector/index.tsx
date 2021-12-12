import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

type BackgroundSelectorProps = {
    backgrounds: string[],
    active: string,
    onBackgroundSelect: (background: string) => void,
}

const BackgroundSelector: React.VFC<BackgroundSelectorProps> = (props: BackgroundSelectorProps) => {
    const { backgrounds, active, onBackgroundSelect } = props;
    const [ visible, setVisible ] = useState(false);

    const onVisibleClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
        stopDefaultClick(e);
        toggleVisible();
    }

    const stopDefaultClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
    }

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onBackgroundSelect(e.target.value);
    }

    const toggleVisible = () => {
        setVisible(!visible);
    }

    return (
        <div className='background-selector'>
            <button className='background-selector__visible-button' onClick={onVisibleClicked}>
                <span>Background: </span><FontAwesomeIcon icon={visible ?  faArrowDown : faArrowUp }/>
            </button>
            { visible &&
                <div className='background-selector__options-container'>
                    <select className='background-selector__options' onChange={onChange} value={active} onClick={stopDefaultClick} onBlur={toggleVisible}>
                         {backgrounds.map((background) =>
                             <option key={background} className={active ? 'background-active-option' : '' }value={background} onClick={stopDefaultClick}>
                                 {background}
                             </option>
                         )};
                    </select>
                </div>
            }
        </div>
    );
}

export default BackgroundSelector;