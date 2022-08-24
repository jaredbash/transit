import logo from './logo.svg'
import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline, ZoomControl } from 'react-leaflet'
import './App.css'
import './map.js'
import { Control } from 'leaflet/dist/leaflet-src.esm'
import { requestData, parseData } from './api.js'

function Box () {
  return (
        <div className={'uiBox'}>
            This is a test.
        </div>
  )
}
function App () {
  const [trip, setTrip] = useState([])
  useEffect(() => {
    requestData(
      '48.11751715319754,-1.6103553771972656',
      '48.10674343697761,-1.6709518432617188',
      'TRANSIT,WALK',
      '5:30pm',
      '8-24-2022',
      'en',
      true)
      .then((response) => {
        const itineraries = parseData(response.plan.itineraries)
        setTrip(itineraries[1].line)
      })
  }, [])

  return (
      <div className={'uiContainer'}>
          <MapContainer className={'leaflet_container'} center={[48.1173, -1.6778]} zoomControl={false} zoom={13} scrollWheelZoom={true}>
              <ZoomControl position={'bottomright'} />
              <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[48.1173, -1.6778]}>
                  <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
              </Marker>
              <Polyline pathOptions={{ color: 'red' }} positions={trip} />
          </MapContainer>
          <Box className={'leaflet-top leaflet-left'} />
      </div>
  )
}

export default App
