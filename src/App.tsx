import React from 'react'
import { Map } from './components/Map'
import { InputSearch, AddrProps } from './components/InputSearch'
import { Load } from './components/load'
import * as S from "../src/styles/app"
import { GlobalContext } from "./context/GlobalContext"

const App = () => {
  const [dataAddress, setDataAddress] = React.useState<AddrProps[]>([])
  const { load } = React.useContext( GlobalContext )
  
  function getData(data: AddrProps[]){
    setDataAddress(data)
  }
  
  
  return (
    <S.Container>
      { load && <Load /> } 
      <InputSearch getCoordinates={getData} />
      <Map data={dataAddress} />
    </ S.Container>
    )
  }
  
  export default App