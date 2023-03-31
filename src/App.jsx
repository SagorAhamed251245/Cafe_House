
import './App.css'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Nav from './Components/Nav/Nav'
import Container from './Components/Container/Container'
function App() {
 

  return (
    <div className="App">
      <Nav></Nav>
      <hr />
      <Container></Container>
    </div>
  )
}

export default App
