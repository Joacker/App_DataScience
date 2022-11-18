import React from 'react'
import { Marker } from 'react-leaflet'
import {IconLocation} from './IconLocation'

const Markers = () => {
  return (
    <Marker position={{lat: '-33.435841', lng: '-70.680244'}} icon={IconLocation} />
  )
}

export default Markers