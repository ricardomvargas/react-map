import React from 'react';

type PopupCoordinateProps = {
  lat: number;
  long: number;
};

const PopupCoordinate = ({ lat, long }: PopupCoordinateProps) => (
  <>
    <p>
      <strong>Lat:</strong>
      {` ${lat}`}
    </p>
    <p>
      <strong>Long:</strong>
      {` ${long}`}
    </p>
  </>
);

export default PopupCoordinate;
