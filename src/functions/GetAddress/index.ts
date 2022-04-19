import axios from "axios"


export const GET_ADDRESS = async (cep:string)=>{
  try {
    const {data} = await axios.get(`https://brasilapi.com.br/api/cep/v2/{${cep}}`)
  return data
} catch (error) {
  console.log(error)
}

}