import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'

import { theme } from './theme/theme'
import { Home } from './pages/Home'
import { Setting } from './pages/Setting'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/setting">
                        <Setting />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    )
}

export default App
