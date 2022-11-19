import React from 'react';

import Wrapper from '../wrapper/Wrapper';

export type MousePositionInfoProps = {
  lat: number;
  long: number;
};

import './mousePositionInfo.css';

const MousePositionInfo = ({ lat, long }: MousePositionInfoProps) => (
  <Wrapper styleClasses={['mouse-position-info']}>
    <p>{`Lat: ${lat} | Long: ${long}`}</p>
  </Wrapper>
);

export default MousePositionInfo;
