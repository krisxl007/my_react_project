import React from 'react'
import ReactDOM from 'react-dom'

// imports infoTable component from infoTable.jsx file
import InfoTable2 from './components/infoTable2'

// Create object
const userInfo = {
    id: '001',
    username: 'Kris',
    email: 'xxxxxx@gmail.com'
}

// Pass userInfo object as parameters to InfoTable component
ReactDOM.render(<InfoTable2 userInfo={userInfo} />, document.getElementById('app'));