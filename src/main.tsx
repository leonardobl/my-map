import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyles from "./styles/GlobalStyles"
import { GlobalContextProvider } from "./context/GlobalContext"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <GlobalStyles />
      <GlobalContextProvider >
        <App />
      </GlobalContextProvider>
    </>
  </React.StrictMode>
  )
