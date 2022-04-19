import React from 'react'
import { LatLngExpression } from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import * as S from "./styles"
import { AddrProps } from "../InputSearch"

type dataMapProps = {
  data: AddrProps[]
}

export const Map = ( {data} : dataMapProps) => {
  
  const centralPosition : LatLngExpression = [-5.1860, -42.7849]
  
  return(
    <S.Container>
      <MapContainer center={centralPosition} zoom={4} style={ {width: "100vw", height: "100vh"} } zoomControl={false} >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    
        { data.map( (data, i) => {
      
      const coordinates: LatLngExpression = [Number(data.location.coordinates.latitude), Number(data.location.coordinates.longitude)]
      
      return (
        <Marker key={i} position={ coordinates }>
          <Popup>
            {`${data.street}, ${data.cep}, ${data.city}-${data.state}`}
          </Popup>
        </Marker>
        )
      } )}
      
      
      </MapContainer>
    </S.Container>
      )
      
    }
