import React, { useState } from 'react';

import Wrapper from '../wrapper/Wrapper';

import './popupCoordinate.css';

type PopupCoordinateProps = {
  inputRef: React.MutableRefObject<null>;
  lat: number;
  long: number;
  copyAction: Function;
  closeAction: Function;
};

const PopupCoordinate = ({
  inputRef,
  lat,
  long,
  copyAction,
  closeAction,
}: PopupCoordinateProps) => {
  const [copyLabel, setCopyLabel] = useState('Copy');

  const onCopyClickHandle = () => {
    setCopyLabel('Copied');
    setTimeout(() => setCopyLabel('Copy'), 1000);
    copyAction();
  };

  return (
    <Wrapper
      inputRef={inputRef}
      styleClasses={['popup-coordinate', lat || long > 0 ? 'display-content' : 'hide-content']}
    >
      <div className='popup__button_container'>
        <button className='button_container__button' onClick={() => onCopyClickHandle()}>
          {copyLabel}{' '}
          <img
            className='button_container__img'
            src='/assets/images/copy_icon.svg'
            title='Copy coordinates'
            alt='copy'
          />
        </button>
        <button className='button_container__button' onClick={() => closeAction()}>
          Close{' '}
          <img
            className='button_container__img'
            src='/assets/images/close_icon.svg'
            title='Close'
            alt='x'
          />
        </button>
      </div>
      <div>
        <p>{` ${lat}`}</p>
        <p>{` ${long}`}</p>
      </div>
    </Wrapper>
  );
};

export default PopupCoordinate;
