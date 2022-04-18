import axios from "axios"

export const GET_COORDINATES = async () => {
  try {
    const {data} = await axios.get(`https://nominatim.openstreetmap.org/search.php?q=alaide+marques+teresina&format=jsonv2`)
  } catch (error) {
    
  }
  return
}
