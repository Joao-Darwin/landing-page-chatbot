import './App.css'
import ApresentationPage from './components/ApresentationPage/ApresentationPage'
import FaleConosco from './components/FaleConosco/FaleConosco'
import InitialPage from './components/InitialPage/InitialPage'
import PageInterfaceAmigavel from './components/PageInterfaceAmigavel/PageInterfaceAmigavel'
import PlanosPage from './components/PlanosPage/PlanosPage'
import TopBar from './components/TopBar/TopBar'


function App() {

  return (
    <>
      <TopBar />
      <InitialPage />
      <ApresentationPage />
      <PageInterfaceAmigavel />
      <PlanosPage />
      <FaleConosco />
    </>
  )
}

export default App
