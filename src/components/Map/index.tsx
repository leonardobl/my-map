import React from 'react'
import { LatLngExpression } from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import * as S from "./styles"

export const Map = () => {
  
  const position: LatLngExpression = [-5.1860, -42.7849]
  const centralPosition : LatLngExpression = [-5.1860, -42.7849]

  return(
    <S.Container>
      <MapContainer center={centralPosition} zoom={4} style={ {width: "100vw", height: "100vh"} } zoomControl={false} >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker position={position}>
          <Popup>
            Teresina-PI
          </Popup>
        </Marker>
        
      </MapContainer>
    </S.Container>
    )
    
  }
