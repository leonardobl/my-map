import React from 'react'
import * as S from "./styles"
import {CgSearch} from "react-icons/cg"
import { useCepValidation } from '../../hooks/useCepValidation'
import { GET_ADDRESS } from '../../functions/GetAddress'
import { GET_COORDINATES } from '../../functions/GetCoordinates'
import { GlobalContext } from "../../context/GlobalContext"


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
  const { setLoad } = React.useContext(GlobalContext)
  
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
    
    setLoad(true)
    const addr = await GET_ADDRESS(inputValue.split("-").join(""))
    console.log(addr)
  }
  
  
  return (
    <S.Container onSubmit={handleSubmit} erro={ erro } >
      <label >
        <input type="text" placeholder='Cep' value={inputValue} onChange={handleValue} maxLength={9}/>
        <CgSearch size={25}/>
      </label>
    </S.Container>
    )
  }
