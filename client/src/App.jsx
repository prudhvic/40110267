import { useEffect, useState } from 'react'
import './App.css'
import TrainPage from './components/TrainPage'

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
      <TrainPage trains={trains} />
    </>
  )
}

export default App
