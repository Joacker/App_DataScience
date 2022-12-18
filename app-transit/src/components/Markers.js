import React from 'react'
import { Marker } from 'react-leaflet'
import { Icon } from 'leaflet'
import {VenueLocationIcon} from './IconLocation'


const Markers = () => {
  const datos = [{ x: 1, y: 2},
    { x: 2, y: 2},
    { x: 3, y: 2}
  ]
  return (
    <div>
      {datos.map( datos => (
        <Marker position={{lat: datos.x, lng: datos.y}} 
              icon={VenueLocationIcon} />
      ))}
      
      
    </div>
  )
}

export default Markers