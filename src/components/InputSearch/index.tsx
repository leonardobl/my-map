import React from 'react'
import * as S from "./styles"
import {CgSearch} from "react-icons/cg"
import { useCepValidation } from '../../hooks/useCepValidation'
import { GET_CEP } from '../../functions/GetAddress'
import { GET_COORDINATES } from '../../functions/GetCoordinates'


type CepProps = {
  "cep": string,
  "logradouro": string,
  "complemento": string,
  "bairro": string,
  "localidade": string,
  "uf": string,
  "ibge": string,
  "gia": string,
  "ddd": string,
  "siafi": string
}


export type CoordinateProps = {
  display_name: string,
  lat: string,
  lon: string
}

type InputSearchProps = {
  getCoordinates: (data: CoordinateProps[])=> void
}


export const InputSearch = ({getCoordinates} : InputSearchProps) => {
  const [inputValue, setInputValue] = React.useState('')
  const [address, setAddress] = React.useState<CepProps>({} as CepProps)
  const [erro, setErro] = React.useState(false)
  const [coordinates, setCoordinates] = React.useState<CoordinateProps[]>([])
  
  function handleValue(e: React.FormEvent<HTMLInputElement>){
    let cepFormated = useCepValidation(e.currentTarget.value)
    if(erro) setErro(false)
    setInputValue(cepFormated)
  }
  
  
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    
    if(inputValue.length < 9) {
      setErro(true)
      return
    }

    const addr = await GET_CEP(inputValue)
    if(addr.erro) {
      setErro(true)
      setAddress(addr)
      return
    }
      setAddress(addr)
      setErro(false)
    }


    async function getCoodinatesFromAddr(){
      const addrFormated = address.logradouro?.trim().split(" ").join("+")
      const result = await GET_COORDINATES(addrFormated)
      const dataAddr: CoordinateProps = Object.assign({}, {lat: result[0].lat, lon: result[0].lon, display_name: result[0].display_name})

      if(coordinates.some( item => item.lat == dataAddr.lat && item.lon == dataAddr.lon )) return
      
      setCoordinates( (prevCoord) => [...prevCoord, dataAddr] )
    }
    
    React.useEffect( ()=>{
      getCoordinates(coordinates)
    }, [coordinates] )
    
    React.useEffect( ()=>{
      if(address.localidade) getCoodinatesFromAddr()
      setInputValue("")
    }, [address] )
    
    return (
      <S.Container onSubmit={handleSubmit} erro={ erro } >
        <label >
          <input type="text" placeholder='Cep' value={inputValue} onChange={handleValue} maxLength={9}/>
          <CgSearch size={25}/>
        </label>
      </S.Container>
      )
    }
