import React from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';

import { State, Action, Dispatch, MapProviderProps } from './MapTypes';

const MapStateContext = React.createContext<{ state: State; dispatch: Dispatch } | undefined>(
  undefined
);

const MapReducer = (state: State, action: Action) => {
  const { type } = action;

  switch (type) {
    case 'create-map': {
      const newState = new Map({
        view: new View({
          center: [0, 0],
          zoom: 2,
        }),
        layers: [new TileLayer({ source: new OSM() })],
        target: action.payload.mapRef,
      });
      return newState;
    }
    case 'add-overlay': {
      const newState = state;
      newState.addOverlay(action.payload.overlay);
      return newState;
    }
    case 'add-interaction': {
      const newState = state;
      newState.addInteraction(action.payload.interaction);
      return newState;
    }
  }
};

const MapProvider = ({ children }: MapProviderProps) => {
  const [state, dispatch] = React.useReducer(MapReducer, new Map());
  const value = { state, dispatch };
  return <MapStateContext.Provider value={value}>{children}</MapStateContext.Provider>;
};

const useMap = () => {
  const context = React.useContext(MapStateContext);
  if (context === undefined) {
    throw new Error('useMap must be used within a MapProvider');
  }
  return context;
};

export { MapProvider, useMap };
