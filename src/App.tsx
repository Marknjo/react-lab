import { useState } from 'react'
import logo from './assets/logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'

/**
 * 
 * Sample Project Starter Code
 * @TODO: Extract Home and Layout form the template
 */


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App


/// Basic Home Route Component
const Home = function() {
  const [count, setCount] = useState(0)
  return (
      <Layout>
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </Layout>
  )
}

// Sample
const Layout:React.FC = function({children}) {
  return (
    <div className="App-header">
      <header >
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <main>
        {children}
      </main>
    </div>
  )
}