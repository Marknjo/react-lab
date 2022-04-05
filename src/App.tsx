import { Route, Routes } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </header>
    </div>
  )
}

export default App

// testing routes
const Home = function() {
  return (
    <>
      <main>
        <h1>Home Page</h1>
      </main>
    </>
  )
}

