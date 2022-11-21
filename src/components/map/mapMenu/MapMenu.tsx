import React from 'react';

import { MWSLayer } from '../../../context/mapContext/MapContextTypes';

import './mapMenu.css';

type MapMenuProps = {
  items: {
    inputName: string;
    title: string;
    mapDefinition: MWSLayer;
    callback: (e: React.ChangeEvent<HTMLInputElement>, mapDefinition: MWSLayer) => void;
  }[];
};

const MapMenu = ({ items }: MapMenuProps) => (
  <div className='hamburger-menu'>
    <input id='menu__toggle' type='checkbox' />
    <label className='menu__btn' htmlFor='menu__toggle'>
      <span></span>
    </label>
    <ul className='menu__box'>
      {items.map((item) => (
        <li key={item.inputName}>
          <label htmlFor={item.inputName}>{item.title}</label>
          <input
            type='checkbox'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              item.callback(e, item.mapDefinition)
            }
            name={item.inputName}
          />
        </li>
      ))}
    </ul>
  </div>
);

export default MapMenu;
