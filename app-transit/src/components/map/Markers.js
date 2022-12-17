import React from 'react'
import { Marker } from 'react-leaflet'
import { Icon } from 'leaflet'
import {VenueLocationIcon} from './IconLocation'

const Markers = () => {
  return (
    <Marker position={{lat: '-33.435841', lng: '-70.680244'}} icon={VenueLocationIcon} />
  )
}

export default Markers