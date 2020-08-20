import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import 'firebase/auth';
import { useState, createContext, Dispatch, SetStateAction } from 'react';

import { theme } from './theme';
import { Home } from './pages/Home';
import { Question } from './pages/Question';

export const AuthContext = createContext<{
  uid: string | null;
  setUid: Dispatch<SetStateAction<string>>;
}>(null);

function App() {
  const [uid, setUid] = useState<string | null>(null);
  return (
    <AuthContext.Provider value={{ uid, setUid }}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/question">
              <Question />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;
