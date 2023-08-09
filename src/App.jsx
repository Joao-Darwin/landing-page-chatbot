import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Routers } from './routes'
import TopBar from "./components/TopBar/TopBar"


function App() {

  return (
    <div>
      <BrowserRouter>
        <TopBar />
        <Routers />
      </BrowserRouter>
    </div>
  )
}

export default App
