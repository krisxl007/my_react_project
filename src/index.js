import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2'
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter as Router ,Route} from 'react-router-dom'//导入的方式跟之前有点变化


ReactDOM.render((
    <Router>
        <div>
            <Route path="/" component={App}/>
            <Route path="/test" component={App}/>
            <Route path="/test2" component={App2}/>
        </div>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
