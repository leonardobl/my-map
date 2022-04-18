import axios from "axios"

export const GET_COORDINATES = async (addr: string) => {
  try {
    const {data} = await axios.get(`https://nominatim.openstreetmap.org/search.php?q=${addr}&format=jsonv2`)

    return data
  } catch (error) {
    console.log(error)
  }
  return
}
