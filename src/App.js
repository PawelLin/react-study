import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Main from './components/Main/Main'
import Login from './views/Login'
import NotFound from './components/Error/NotFound'

function App () {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route path="/home" children={({match}) => <Main {...match} />} />
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    )
}

export default App