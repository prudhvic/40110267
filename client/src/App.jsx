import { useEffect, useState } from 'react'
import './App.css'
import TrainPage from './components/TrainPage'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TrainDetail from './components/TrainDetail';
import NavBar from './components/NavBar';
function App() {
  let [trains, setTrains] = useState([])
  let fetchTrains = async () => {
    let response = await fetch("http://localhost:5000/trains")
    let data = await response.json()
    console.log(data)
    setTrains(data)
  }
  useEffect(() => {
    fetchTrains()
  }, [])
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<TrainPage trains={trains} />} />
          <Route path="/trains/:trainId" element={<TrainDetail />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
