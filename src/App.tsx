import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'

import { theme } from './theme'
import { Home } from './pages/Home'
import { Setting } from './pages/Setting'
import { Question } from './pages/Question'

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
                    <Route exact path="/question">
                        <Question />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    )
}

export default App
