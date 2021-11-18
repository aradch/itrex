import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'

import { App } from './App'


const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  font-family: "Poppins";
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

