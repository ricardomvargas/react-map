import React, { useEffect, useRef, useState } from 'react';
import { Overlay } from 'ol';
import Tile from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import { Layer } from 'ol/layer';

import { useMap } from '../../context/mapContext/MapContext';

import MapMenu from './mapMenu/MapMenu';
import PopupCoordinate from '../popupCoordinate/PopupCoordinate';
import MousePositionInfo from '../mousePositionInfo/MousePositionInfo';

import { MWS_LAYERS } from '../../context/mapContext/mapDefinitions';
import { MWSLayer } from '../../context/mapContext/MapContextTypes';

import 'ol/ol.css';
import './mapWrapper.css';

const MapWrapper = () => {
  const { state, dispatch } = useMap();
  const [clickedCoordinates, setClickedCoordinages] = useState({ lat: 0, long: 0 });
  const [pointCoordinates, setPointerCoordinates] = useState({ lat: 0, long: 0 });
  const [popupCoordinateOverlay, setPopupCoordinateOverlay] = useState<Overlay | undefined>();
  const mapRef = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {
    mapInit();
  }, []);

  const onMapClickHandler = (e: any) => {
    const tempCoordinate = e.coordinate.join().split(',');

    if (!popupCoordinateOverlay) {
      const popup = new Overlay({
        element: popupRef?.current ?? undefined,
      });
      dispatch({ type: 'add-overlay', payload: { overlay: popup } });
      popup?.setPosition(undefined);
      popup?.setPosition(e.coordinate);
      setPopupCoordinateOverlay(popup);
      setClickedCoordinages({ lat: tempCoordinate[0], long: tempCoordinate[1] });
    } else {
      popupCoordinateOverlay?.setPosition(undefined);
      popupCoordinateOverlay?.setPosition(e.coordinate);
    }
  };

  const onPointerMoveHandler = (e: any) =>
    setPointerCoordinates({
      lat: e.coordinate.join().split(',')[0],
      long: e.coordinate.join().split(',')[1],
    });

  const onLayersCheckChange = (e: React.ChangeEvent<HTMLInputElement>, mapDefinition: MWSLayer) => {
    const { checked } = e.target;

    if (checked) {
      const newLayer = new Tile({
        source: new TileWMS({
          url: mapDefinition.url,
          params: {
            LAYERS: mapDefinition.params.layerName,
            FORMAT: mapDefinition.params.format,
            TRANSPARENT: mapDefinition.params.transparent,
          },
        }),
        visible: true,
      });

      newLayer.set('layerId', mapDefinition.name);
      dispatch({ type: 'add-layer', payload: { layer: newLayer } });
    } else {
      const currentLayer = state
        .getLayers()
        .getArray()
        .find((l) => l.get('layerId') === mapDefinition.name);

      dispatch({ type: 'remove-layer', payload: { layer: currentLayer as Layer } });
    }
  };

  const mapInit = () => {
    dispatch({
      type: 'create-map',
      payload: { mapRef: mapRef?.current ?? undefined },
    });
    dispatch({ type: 'add-event', payload: { eventName: 'click', callback: onMapClickHandler } });
    dispatch({
      type: 'add-event',
      payload: { eventName: 'pointermove', callback: onPointerMoveHandler },
    });
  };

  return (
    <>
      <MapMenu
        items={[
          {
            inputName: 'checkExcavationAres',
            title: 'Excavation Areas',
            callback: onLayersCheckChange,
            mapDefinition: MWS_LAYERS.find((l) => l.name === 'excavationAreas') as MWSLayer,
          },
          {
            inputName: 'checkHikingNetworks',
            title: 'Regional Hiking Networks',
            callback: onLayersCheckChange,
            mapDefinition: MWS_LAYERS.find((l) => l.name === 'regionalHiking') as MWSLayer,
          },
          {
            inputName: 'checkRuralWalkingRoutes',
            title: 'Rural Walking Routes',
            callback: onLayersCheckChange,
            mapDefinition: MWS_LAYERS.find((l) => l.name === 'ruralWalkingRoutes') as MWSLayer,
          },
          {
            inputName: 'checkAdministrativeUnits',
            title: 'Administrative Units',
            callback: onLayersCheckChange,
            mapDefinition: MWS_LAYERS.find((l) => l.name === 'administrativeUnits') as MWSLayer,
          },
          {
            inputName: 'checkAvailableElectricityGrid',
            title: 'Available electricity grid capacity',
            callback: onLayersCheckChange,
            mapDefinition: MWS_LAYERS.find(
              (l) => l.name === 'availableElectricityGrid'
            ) as MWSLayer,
          },
          {
            inputName: 'checkRegionalCyclingNetworks',
            title: 'Regional Cycling Networks',
            callback: onLayersCheckChange,
            mapDefinition: MWS_LAYERS.find(
              (l) => l.name === 'regionalCyclingNetworksgovernmentServices'
            ) as MWSLayer,
          },
          {
            inputName: 'checkGovernmentServices',
            title: 'Government Services',
            callback: onLayersCheckChange,
            mapDefinition: MWS_LAYERS.find((l) => l.name === 'governmentServices') as MWSLayer,
          },
          {
            inputName: 'checkNationalRoadFile',
            title: 'National Road File',
            callback: onLayersCheckChange,
            mapDefinition: MWS_LAYERS.find((l) => l.name === 'nationalRoadFile') as MWSLayer,
          },
        ]}
      />
      <div ref={mapRef} id='ol-map' className='map-wrapper'></div>
      <PopupCoordinate
        lat={clickedCoordinates.lat}
        long={clickedCoordinates.long}
        inputRef={popupRef}
        copyAction={() =>
          navigator.clipboard.writeText(`${clickedCoordinates.lat}, ${clickedCoordinates.long}`)
        }
        closeAction={() => popupCoordinateOverlay?.setPosition(undefined)}
      />
      <MousePositionInfo lat={pointCoordinates.lat} long={pointCoordinates.long} />
    </>
  );
};

export default MapWrapper;
