import L from 'leaflet'

export const IconLocation = L.icon({
    //iconUrl: require('../assets/icon.png'),
    iconUrl: require('../assets/icon.svg'),
    iconRetinaUrl: require('../assets/icon.svg'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [25, 25],
    className: 'leaflet-venue-icon',
})
