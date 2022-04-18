import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  height: 100%;
}

a{ 
  text-decoration:none;
}

`

export default GlobalStyles