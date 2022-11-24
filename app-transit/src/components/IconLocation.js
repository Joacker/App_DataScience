import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-icon.png'

export const VenueLocationIcon = L.icon({
    //iconUrl: require('../assets/icon.png'),
    iconUrl: icon,
    iconRetinaUrl: iconShadow,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [25, 25],
    className: 'leaflet-venue-icon',
});
