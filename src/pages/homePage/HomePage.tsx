import React from 'react';

import { MapProvider } from '../../context/mapContext/MapContext';

import MapWrapper from '../../components/map/MapWrapper';

const HomePage = () => {
  return (
    <MapProvider>
      <MapWrapper />
    </MapProvider>
  );
};

export default HomePage;
