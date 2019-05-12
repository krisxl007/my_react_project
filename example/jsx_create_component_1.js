import React from 'react'
import ReactDOM from 'react-dom'

// imports infoTable component from infoTable.jsx file
import InfoTable from './components/infoTable'

// Create object
const userInfo = {
    id: '001',
    username: 'Kris',
    email: 'xxxxxx@gmail.com'
}

// Pass userInfo object as parameters to InfoTable component
ReactDOM.render(<InfoTable userInfo={userInfo} />, document.getElementById('app'));