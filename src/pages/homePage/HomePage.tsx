import React from 'react';

import { MapProvider } from '../../context/mapContext/MapContext';

import Menu from '../../components/menu/Menu';
import MapWrapper from '../../components/map/MapWrapper';

const HomePage = () => {
  return (
    <MapProvider>
      <Menu />
      <MapWrapper />
    </MapProvider>
  );
};

export default HomePage;
