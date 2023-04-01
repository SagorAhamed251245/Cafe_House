
import './App.css'
import BlogContainer from './Components/BlogsContainer/BlogContainer'

import Nav from './Components/Nav/Nav'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  

  return (
    <div className="App">
       <Nav></Nav>
       <hr />
      <BlogContainer></BlogContainer>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
