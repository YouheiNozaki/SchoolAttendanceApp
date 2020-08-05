import React from 'react'
// import { HashRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core'

import { theme } from './theme/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <p>Hello React</p>
    </ThemeProvider>
  )
}

export default App
