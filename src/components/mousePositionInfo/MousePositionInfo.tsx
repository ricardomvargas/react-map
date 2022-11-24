import React from 'react';

import Wrapper from '../wrapper/Wrapper';

import './mousePositionInfo.css';

export type MousePositionInfoProps = {
  lat: number;
  long: number;
};

const MousePositionInfo = ({ lat, long }: MousePositionInfoProps) => (
  <Wrapper cssClasses={['mouse-position-info']}>
    <p>{`${lat} | ${long}`}</p>
  </Wrapper>
);

export default MousePositionInfo;
