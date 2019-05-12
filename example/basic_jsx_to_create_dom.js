import React from 'react'
import ReactDOM from 'react-dom'

// JSX to create html elements, in lower level is still React.createElement()
const mydiv = <div id="mydiv" title="myh1Title">
                This is mydiv
                <h1 id="myh1">This is myh1</h1>
             </div>

// render virtual DOM on page
ReactDOM.render(mydiv, document.getElementById('app'));