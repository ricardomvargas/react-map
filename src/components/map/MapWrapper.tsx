import React, { useEffect, useRef, useState } from 'react';
import { Overlay } from 'ol';

import { useMap } from '../../context/mapContext/MapContext';

import PopupCoordinate from '../popupCoordinate/PopupCoordinate';

import 'ol/ol.css';
import './mapWrapper.css';

const MapWrapper = () => {
  const [currentCoordinates, setCurrentCoordinates] = useState({ lat: '', long: '' });
  const [existPopupOverlay, setExistPopupOverlay] = useState(false);
  const { dispatch } = useMap();
  const mapRef = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {
    dispatch({
      type: 'create-map',
      payload: { mapRef: mapRef?.current ?? undefined },
    });
    dispatch({ type: 'add-event', payload: { eventName: 'click', callback: onClickHandler } });
  }, []);

  const onClickHandler = (e: any) => {
    const popup = new Overlay({
      element: popupRef?.current ?? undefined,
    });

    if (!existPopupOverlay) {
      dispatch({ type: 'add-overlay', payload: { overlay: popup } });
      setExistPopupOverlay(true);
    }

    const tempCoordinate = e.coordinate.join().split(',');
    setCurrentCoordinates({ lat: tempCoordinate[0], long: tempCoordinate[1] });

    popup?.setPosition(undefined);
    popup?.setPosition(e.coordinate);
  };

  return (
    <>
      <PopupCoordinate
        inputRef={popupRef}
        lat={currentCoordinates.lat}
        long={currentCoordinates.long}
      />
      <div ref={mapRef} id='ol-map' className='map-wrapper'></div>
    </>
  );
};

export default MapWrapper;
