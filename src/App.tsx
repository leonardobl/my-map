import React from 'react'
import { Map } from './components/Map'
import { InputSearch, CoordinateProps } from './components/InputSearch'

const App = () => {
  const [dataAddress, setDataAddress] = React.useState<CoordinateProps[]>([])
  
  
  function getData(data: CoordinateProps[]){
    setDataAddress(data)
  }

 
  return (
    <>
      <InputSearch getCoordinates={getData} />
      <Map data={dataAddress} />
    </>
    )
  }
  
  export default App