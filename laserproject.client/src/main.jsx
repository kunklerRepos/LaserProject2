import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

//const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') + "/LaserProject2";
//console.log(baseUrl);
/*<React.StrictMode>
    <App />
  </React.StrictMode>,*/

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
)
