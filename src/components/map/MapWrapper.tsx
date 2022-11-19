import React, { useEffect, useRef, useState } from 'react';
import { Overlay } from 'ol';

import { useMap } from '../../context/mapContext/MapContext';

import PopupCoordinate from '../popupCoordinate/PopupCoordinate';
import MousePositionInfo from '../mousePositionInfo/MousePositionInfo';

/* #TODO: Funcionalidade para adicionar marcadores no mapa onde o usuário clicar, ao clicar no marcador
 * exibir o PopupCoordinate (estudar mudar o nome do componente).
 */

import 'ol/ol.css';
import './mapWrapper.css';

const MapWrapper = () => {
  const [clickedCoordinates, setClickedCoordinages] = useState({ lat: 0, long: 0 });
  const [pointCoordinates, setPointerCoordinates] = useState({ lat: 0, long: 0 });
  const [popupCoordinateOverlay, setPopupCoordinateOverlay] = useState<Overlay | undefined>();
  const { dispatch } = useMap();
  const mapRef = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {
    mapInit();
  }, []);

  const onClickHandler = (e: any) => {
    const tempCoordinate = e.coordinate.join().split(',');

    if (!popupCoordinateOverlay) {
      const popup = new Overlay({
        element: popupRef?.current ?? undefined,
      });
      dispatch({ type: 'add-overlay', payload: { overlay: popup } });
      setPopupCoordinateOverlay(popup);
      setClickedCoordinages({ lat: tempCoordinate[0], long: tempCoordinate[1] });
      popup?.setPosition(undefined);
      popup?.setPosition(e.coordinate);
    } else {
      popupCoordinateOverlay?.setPosition(undefined);
      popupCoordinateOverlay?.setPosition(e.coordinate);
    }
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
