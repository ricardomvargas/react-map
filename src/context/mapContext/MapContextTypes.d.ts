import React from 'react';
import { Map, Overlay } from 'ol';
import Interaction from 'ol/interaction/Interaction';
import { events } from 'openlayers';
import Control from 'ol/control/Control';
import { Layer } from 'ol/layer';

export type State = Map;

export type Action =
  | {
      type: 'create-map';
      payload: { mapRef: HTMLElement | undefined };
    }
  | { type: 'add-overlay'; payload: { overlay: Overlay } }
  | { type: 'add-layer'; payload: { layer: Layer } }
  | { type: 'add-interaction'; payload: { interaction: Interaction } }
  | { type: 'add-event'; payload: { eventName: events; callback: any } }
  | { type: 'add-control'; payload: { control: Control } }
  | { type: 'remove-layer'; payload: { layer: Layer } };

export type Dispatch = (action: Action) => void;

export type MapProviderProps = { children: React.ReactNode };

export type MWSLayerNames =
  | 'excavationAreas'
  | 'regionalHiking'
  | 'ruralWalkingRoutes'
  | 'administrativeUnits'
  | 'availableElectricityGrid'
  | 'regionalCyclingNetworksgovernmentServices'
  | 'governmentServices'
  | 'nationalRoadFile';

export type MWSLayer = {
  name: MWSLayerNames;
  url: string;
  params: {
    layerName: number | string;
    format: string;
    transparent: boolean;
  };
};
