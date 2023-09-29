import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './views/App.jsx'
import './styles/global.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

// const root = ReactDOM.createRoot(document.getElementById('root'));

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harry',
//   lastName: 'Pham'
// }

// const element = (
//   <h1>Hello, {formatName(user)}</h1>
// );

// root.render(element);