import React from 'react'
import { LatLngExpression } from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import * as S from "./styles"
import { CoordinateProps } from "../InputSearch"

type dataMapProps = {
  data: CoordinateProps[]
}

export const Map = ( {data} : dataMapProps) => {
  
  const position: LatLngExpression = [-5.1860, -42.7849]
  const centralPosition : LatLngExpression = [-5.1860, -42.7849]
  
  return(
    <S.Container>
      <MapContainer center={centralPosition} zoom={4} style={ {width: "100vw", height: "100vh"} } zoomControl={false} >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    
        { data.map( (data, i) => {
      
      const coordinates: LatLngExpression = [Number(data.lat), Number(data.lon)]
      
          console.log(coordinates)

      return (
        <Marker key={i} position={ coordinates }>
          <Popup>
            {data.display_name}
          </Popup>
        </Marker>
        )
      } )}
      
      
      </MapContainer>
    </S.Container>
      )
      
    }
