import React from 'react'

import NavigationBar from '@/components/NavigationBar'

import { Router } from 'react-router-dom'

const history = require('history').createBrowserHistory();


export default class App extends React.Component {

    constructor() {
        super();
    }

    render() {
        return <div>
            <Router history={history}>
                <NavigationBar />
            </Router>
        </div>
    }
}