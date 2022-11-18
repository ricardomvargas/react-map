import React from 'react';

import { MapProvider } from '../../context/MapContext';

import Menu from '../../components/menu/Menu';
import MapWrapper from '../../components/map/MapWrapper';

import './homePage.css';

const HomePage = () => {
  return (
    <MapProvider>
      <Menu />
      <MapWrapper />
    </MapProvider>
  );
};

export default HomePage;