import React from 'react';

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
}: PopupCoordinateProps) => (
  <Wrapper inputRef={inputRef} styleClasses={['popup-coordinate']}>
    <div>
      <p>
        <strong>Lat:</strong>
        {` ${lat}`}
      </p>
      <p>
        <strong>Long:</strong>
        {` ${long}`}
      </p>
    </div>
    <div className='popup__button-container'>
      <button onClick={() => copyAction()}>
        <img src='/assets/images/copy.svg' title='Copy coordinates' alt='copy coordinates' />
      </button>
      <button onClick={() => closeAction()}>
        <img src='/assets/images/close.svg' title='Close' alt='close' />
      </button>
    </div>
  </Wrapper>
);

export default PopupCoordinate;
