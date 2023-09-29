import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
// import ListToDo from './Todos/ListToDo'
import Nav from './Nav/Nav';
import MyComponent2 from './example/MyComponent2';
import Home from './example/Home';

/**
 * 2 components: class component / function component ( function, arrow)
 * stateless/statefull components (Function vs Class)
 * JSX
 * một hàm return một khối code html chính là một component
 */

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Nav></Nav>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/mycomponent" element={<MyComponent2 />} />

      </Routes>

      {/* <ListToDo /> */}
      {/* <MyComponent2 /> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vites and React logos to learn more
      </p> */}
    </>
  )
}

export default App
