import proj4 from 'proj4';
import * as olProj4 from 'ol/proj/proj4';

export const defineProjection = (name: string, value: string) => {
  proj4.defs(name, value);
  olProj4.register(proj4);
};
