import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import Formulario from "./components/Formulario";


function App() {
  return (
    <>
    <Container className="my-5 mainPage">
       <h1 className="display-4 text-center">Listas de tareas ejercicio 5</h1>
       <hr className="text-light"/>
      
       <Formulario></Formulario>
    </Container>
    <footer className="bg-dark text-light text-center py-5">
      <p> &copy; Todos los derechos reservados</p>
    </footer>
    </>
  )
}

export default App