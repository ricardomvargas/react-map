import React, { useEffect, useRef } from 'react';

import { useMap } from '../../context/MapContext';

import 'ol/ol.css';
import './mapWrapper.css';

const MapWrapper = () => {
  const { dispatch } = useMap();
  const mapRef = useRef(null);

  useEffect(() => {
    dispatch({
      type: 'create-map',
      payload: { mapRef: mapRef?.current ?? undefined },
    });
  }, []);

  return <div ref={mapRef} id='ol-map' className='map-wrapper'></div>;
};

export default MapWrapper;
