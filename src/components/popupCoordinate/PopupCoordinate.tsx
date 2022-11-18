import React from 'react';

import './popupCoordinate.css';

type PopupCoordinateProps = {
  inputRef: React.MutableRefObject<null>;
  lat: string;
  long: string;
};

const PopupCoordinate = ({ inputRef, lat, long }: PopupCoordinateProps) => {
  return (
    <div className='popup-coordinate' ref={inputRef}>
      <p>
        <strong>Lat:</strong>
        {` ${lat}`}
      </p>
      <p>
        <strong>Long:</strong>
        {` ${long}`}
      </p>
    </div>
  );
};

export default PopupCoordinate;
