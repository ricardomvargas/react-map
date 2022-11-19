import React, { useEffect, useRef, useState } from 'react';
import { Overlay } from 'ol';

import { useMap } from '../../context/mapContext/MapContext';

import Wrapper from '../wrapper/Wrapper';
import PopupCoordinate from '../popupCoordinate/PopupCoordinate';
import MousePositionInfo from '../mousePositionInfo/MousePositionInfo';

import 'ol/ol.css';
import './mapWrapper.css';

const MapWrapper = () => {
  const [clickedCoordinates, setClickedCoordinages] = useState({ lat: 0, long: 0 });
  const [pointCoordinates, setPointerCoordinates] = useState({ lat: 0, long: 0 });
  const [existPopupOverlay, setExistPopupOverlay] = useState(false);
  const { dispatch } = useMap();
  const mapRef = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {
    mapInit();
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
    setClickedCoordinages({ lat: tempCoordinate[0], long: tempCoordinate[1] });

    popup?.setPosition(undefined);
    popup?.setPosition(e.coordinate);
  };

  const pointerMoveHandler = (e: any) =>
    setPointerCoordinates({
      lat: e.coordinate.join().split(',')[0],
      long: e.coordinate.join().split(',')[1],
    });

  const mapInit = () => {
    dispatch({
      type: 'create-map',
      payload: { mapRef: mapRef?.current ?? undefined },
    });
    dispatch({ type: 'add-event', payload: { eventName: 'click', callback: onClickHandler } });
    dispatch({
      type: 'add-event',
      payload: { eventName: 'pointermove', callback: pointerMoveHandler },
    });
  };

  return (
    <>
      <div ref={mapRef} id='ol-map' className='map-wrapper'></div>
      <Wrapper inputRef={popupRef}>
        <PopupCoordinate lat={clickedCoordinates.lat} long={clickedCoordinates.long} />
      </Wrapper>
      <MousePositionInfo lat={pointCoordinates.lat} long={pointCoordinates.long} />
    </>
  );
};

export default MapWrapper;
