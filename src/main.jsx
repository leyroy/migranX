import React from 'react'
import ReactDOM from 'react-dom/client'
import {AnimatePresence} from "framer-motion"
import './App.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimatePresence>
    <App />
    </AnimatePresence>
  </React.StrictMode>,
)
