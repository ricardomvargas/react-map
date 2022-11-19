import React from 'react';

import Wrapper from '../wrapper/Wrapper';

import './popupCoordinate.css';

// #TODO: Fazer efeito hover nos botões

// #TODO: Dar feedback para o usuário de que a coordenada foi copiada

// #TODO #IDEIA: Pensar sobre fechar a modal após a coordenada ter sido copiada

// #TODO: Botão não parecem botões, testar outras imagens

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
      <p>{` ${lat}`}</p>
      <p>{` ${long}`}</p>
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
