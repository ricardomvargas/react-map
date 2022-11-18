import React from 'react';
import { Map, Overlay } from 'ol';
import Interaction from 'ol/interaction/Interaction';

export type State = Map;

export type Action =
  | {
      type: 'create-map';
      payload: { mapRef: HTMLElement | undefined };
    }
  | { type: 'add-overlay'; payload: { overlay: Overlay } }
  | { type: 'add-interaction'; payload: { interaction: Interaction } };

export type Dispatch = (action: Action) => void;

export type MapProviderProps = { children: React.ReactNode };
