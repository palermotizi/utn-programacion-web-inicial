import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import doSomething from './funciones.js'
doSomething()

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)