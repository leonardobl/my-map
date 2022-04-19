import React from 'react'


interface IGlobalContextProps {
  load: boolean
  setLoad: (value: boolean)=> void
}



export const GlobalContext = React.createContext<IGlobalContextProps>({} as IGlobalContextProps)

export const GlobalContextProvider = ({children} : {children: React.ReactNode})=>{
  const [load, setLoad] = React.useState(false)

  return <GlobalContext.Provider value={{
    load, setLoad
  }}>
    {children}
  </GlobalContext.Provider>
}