import React from 'react'


interface IGlobalContextProps {
  load: boolean
  setLoad: (value: boolean)=> void
}



export const GlobalContext = React.createContext<IGlobalContextProps>({} as IGlobalContextProps)
const [load, setLoad] = React.useState(false)

export const GlobalContextProvider = ()=>{

  return <GlobalContext.Provider value={{
    load, setLoad
  }}></GlobalContext.Provider>
}