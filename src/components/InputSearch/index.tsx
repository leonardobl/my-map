import React from 'react'
import * as S from "./styles"
import {CgSearch} from "react-icons/cg"
import { useCepValidation } from '../../hooks/useCepValidation'
import { GET_ADDRESS } from '../../functions/GetAddress'
import { GlobalContext } from "../../context/GlobalContext"


type AddrProps = {
  "cep": string,
  "state": string,
  "city": string,
  "neighborhood": string,
  "street": string,
  "service": string,
  "location":{
    "type": string,
    "coordinates":{
      "longitude": string,
      "latitude": string
    }
  }
}


type InputSearchProps = {
  getCoordinates: (data: AddrProps[])=> void
}


export const InputSearch = ({getCoordinates} : InputSearchProps) => {
  
  const [inputValue, setInputValue] = React.useState('')
  const [address, setAddress] = React.useState<AddrProps>({} as AddrProps)
  const [erro, setErro] = React.useState(false)
  const [coordinates, setCoordinates] = React.useState<AddrProps[]>([])
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
    
    try {
      setLoad(true)
      const addr = await GET_ADDRESS(inputValue.split("-").join(""))
      setAddress(addr)
      setInputValue("")
    } catch (error) {
      console.log(error)
    } finally {
      setLoad(false)
    }
  }
  
  
  React.useEffect( ()=>{

    console.log(address)
    console.log(address.cep)

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
