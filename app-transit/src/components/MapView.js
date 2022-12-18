import React from 'react'
import {MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Markers from './Markers'
import useSwr from 'swr'



const MapView = () => {
    return (
    <div style={{'padding-left':200}}>
        <MapContainer  center={{lat: '-33.4727879', lng: '-70.6298313'}} zoom={13}>
            <TileLayer 
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            <Markers/>
        </MapContainer>
    </div>    
    );
    
}

export default MapView