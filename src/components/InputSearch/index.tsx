import React from 'react'
import * as S from "./styles"
import {CgSearch} from "react-icons/cg"
import { useCepValidation } from '../../hooks/useCepValidation'
import { GET_CEP } from '../../functions/GetAddress'


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

type CepError = {
  erro: boolean
}


export const InputSearch = () => {
  const [inputValue, setInputValue] = React.useState('')
  const [address, setAddress] = React.useState<CepProps | CepError>({} as CepProps)
  const [erro, setErro] = React.useState(false)

  function handleValue(e: React.FormEvent<HTMLInputElement>){
    let cepFormated = useCepValidation(e.currentTarget.value)
    if(erro) setErro(false)
    setInputValue(cepFormated)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    try {
      const addr = await GET_CEP(inputValue)
      if(addr.erro) {
        setErro(true)
        setAddress(addr)
        return
      }
      setAddress(addr)
      setErro(false)
    } catch (error) {
      console.log(error)
    }
   
  }

  React.useEffect( ()=>{
    console.log(address)
  }, [address] )

  return (
    <S.Container onSubmit={handleSubmit} erro={ erro } >
      <label >
        <input type="text" placeholder='Cep' value={inputValue} onChange={handleValue} maxLength={9}/>
        <CgSearch size={25} onClick={()=> handleSubmit}/>
      </label>
    </S.Container>
  )
}
