import { MWSLayer } from './MapContextTypes';

export const PROJECTIONS = {
  EPSG_28992: {
    name: 'EPSG:28992',
    value:
      '+proj=sterea +lat_0=52.1561605555556 +lon_0=5.38763888888889 +k=0.9999079 +x_0=155000 +y_0=463000 +ellps=bessel +towgs84=565.4171,50.3319,465.5524,1.9342,-1.6677,9.1019,4.0725 +units=m +no_defs +type=crs',
  },
};

export const MWS_LAYERS: MWSLayer[] = [
  {
    name: 'excavationAreas',
    url: 'https://service.pdok.nl/provincies/begrenzingen-vergunde-ontgrondingsgebieden-zand-grindwinning/wms/v1_0',
    params: {
      layerName: 'AM.ProspectingAndMiningPermitArea',
      format: 'image/png',
      transparent: true,
    },
  },
  {
    name: 'regionalHiking',
    url: 'https://service.pdok.nl/wandelnet/regionale-wandelnetwerken/wms/v1_0?version=1.3.0',
    params: { layerName: 'wandelnetwerken', format: 'image/png', transparent: true },
  },
  {
    name: 'ruralWalkingRoutes',
    url: 'https://service.pdok.nl/wandelnet/landelijke-wandelroutes/wms/v1_0',
    params: {
      layerName: 'landelijke-wandelroutes',
      format: 'image/png',
      transparent: true,
    },
  },
  {
    name: 'administrativeUnits',
    url: 'https://service.pdok.nl/kadaster/au/wms/v2_0',
    params: {
      layerName: 'AU.AdministrativeBoundary',
      format: 'image/png',
      transparent: true,
    },
  },
  {
    name: 'availableElectricityGrid',
    url: 'https://service.pdok.nl/kadaster/netcapaciteit/wms/v1_0',
    params: {
      layerName: 'IndicatiefVerzorgingsgebied',
      format: 'image/png',
      transparent: true,
    },
  },
  {
    name: 'regionalCyclingNetworksgovernmentServices',
    url: 'https://service.pdok.nl/fietsplatform/regionale-fietsnetwerken/wms/v1_0',
    params: {
      layerName: 'fietsnetwerken',
      format: 'image/png',
      transparent: true,
    },
  },
  {
    name: 'governmentServices',
    url: 'https://geodata.nationaalgeoregister.nl/overheidsdiensten/wms',
    params: {
      layerName: 'overheidsdiensten',
      format: 'image/png',
      transparent: true,
    },
  },
  {
    name: 'nationalRoadFile',
    url: 'https://service.pdok.nl/rws/nwbvaarwegen/wms/v1_0',
    params: {
      layerName: 'vaarwegvakken',
      format: 'image/png',
      transparent: true,
    },
  },
];
