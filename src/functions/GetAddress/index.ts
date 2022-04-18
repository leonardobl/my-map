import axios from "axios"


export const GET_CEP = async (cep:string)=>{
  const {data} = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
  return data
}