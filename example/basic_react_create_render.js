import React from 'react'
import ReactDOM from 'react-dom'

// create react virtual DOM
const myh1 = React.createElement('h1', {id: 'myh1', title: 'myh1Title'}, 'Hello React!!');

// render virtual DOM on page
ReactDOM.render(myh1, document.getElementById('app'));

//*实际开发中基本不会这样来创建DOM，而是用JSX语法来直接写HTML*