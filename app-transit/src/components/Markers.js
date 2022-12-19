import React from 'react'
import { Marker } from 'react-leaflet'
import { Icon } from 'leaflet'
import {VenueLocationIcon} from './IconLocation'


const Markers = ({dato2}) => {
  const datos = [{ x: 1, y: 2},
    { x: 2, y: 2},
    { x: 3, y: 2}
  ]
  return (
    <div>{
      Object.keys(dato2.coords).map((key, i) => (
        <p key={i}>
          <Marker position={{lat: dato2.coords[key].x, lng: dato2.coords[key].y}} 
              icon={VenueLocationIcon} />
        </p>))
      /*dato2.map( dato2 => (
      ))*/}
      
      
    </div>
  )
}

export default Markers