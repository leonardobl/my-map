import React from 'react'
import { Map } from './components/Map'
import { InputSearch, CoordinateProps } from './components/InputSearch'
import { Load } from './components/load'
import * as S from "../src/styles/app"

const App = () => {
  const [dataAddress, setDataAddress] = React.useState<CoordinateProps[]>([])
  
  
  function getData(data: CoordinateProps[]){
    setDataAddress(data)
  }
  
  
  return (
    <S.Container>
      <Load />
      <InputSearch getCoordinates={getData} />
      <Map data={dataAddress} />
    </ S.Container>
    )
  }
  
  export default App