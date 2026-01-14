import { useState } from 'react'
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './App.css'
import ArtTable from './components/ArtTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{padding :"2rem"}}>
      <h2>Art Institute  of Chicago -Artwork</h2>
      <ArtTable/>
      
    </div>
  )
}

export default App
