import React from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';

import { Projections, defineProjection } from './mapUtils';

import { State, Action, Dispatch, MapProviderProps } from './MapContextTypes';

const MapStateContext = React.createContext<{ state: State; dispatch: Dispatch } | undefined>(
  undefined
);

const MapReducer = (state: State, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case 'create-map': {
      defineProjection(Projections.EPSG_28992.name, Projections.EPSG_28992.value);
      const newState = new Map({
        view: new View({
          center: [142735.75, 470715.91],
          zoom: 9,
          projection: Projections.EPSG_28992.name,
        }),
        layers: [new TileLayer({ source: new OSM() })],
        target: payload.mapRef,
      });
      return newState;
    }
    case 'add-overlay': {
      const newState = state;
      newState.addOverlay(payload.overlay);
      return newState;
    }
    case 'add-interaction': {
      const newState = state;
      newState.addInteraction(payload.interaction);
      return newState;
    }
    case 'add-event': {
      const newState = state;
      newState.on(payload.eventName, payload.callback);
      return newState;
    }
    case 'add-control': {
      const newState = state;
      newState.addControl(payload.control);
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
