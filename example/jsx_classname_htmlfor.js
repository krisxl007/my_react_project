import React from 'react'
import ReactDOM from 'react-dom'

// should use className and htmlFor in JSX instead of normail html class and for
const mydiv = <div className="myClass" htmlFor="myFor">This is mydiv</div>

ReactDOM.render(mydiv, document.getElementById('app'));