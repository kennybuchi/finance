import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { AddUser, FinanceList, UpdateFinance } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path='/user/create' exact component={AddUser} />
                <Route path='/user/finances/list' exact component={FinanceList} />
                <Route path='/user/finances/update' exact component={UpdateFinance} />
            </Switch>
        </Router>
    )
}

export default App