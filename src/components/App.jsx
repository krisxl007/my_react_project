import React from 'react'
import NavigationBar from '@/components/NavigationBar'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@/stores/store.js'

const history = require('history').createBrowserHistory();

export default class App extends React.Component {

    constructor() {
        super();
    }

    render() {
        return <Provider store={store}>
            <div>
                <Router history={history}>
                    <NavigationBar />
                </Router>
            </div>
        </Provider>
    }
}