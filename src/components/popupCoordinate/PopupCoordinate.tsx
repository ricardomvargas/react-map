import React from 'react';

import Wrapper from '../wrapper/Wrapper';

import './popupCoordinate.css';

// #TODO #IDEIA: Pensar sobre fechar a modal após a coordenada ter sido copiada

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
    <div className='popup__button_container'>
      <button className='button_container__button' onClick={() => copyAction()}>
        Copy{' '}
        <img
          className='button_container__img'
          src='/assets/images/copy_icon.svg'
          title='Copy coordinates'
          alt='copy coordinates'
        />
      </button>
      <button className='button_container__button' onClick={() => closeAction()}>
        Close{' '}
        <img
          className='button_container__img'
          src='/assets/images/close_icon.svg'
          title='Close'
          alt='close'
        />
      </button>
    </div>
    <div>
      <p>{` ${lat}`}</p>
      <p>{` ${long}`}</p>
    </div>
  </Wrapper>
);

export default PopupCoordinate;
