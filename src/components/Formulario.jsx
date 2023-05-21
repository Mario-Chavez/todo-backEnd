import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useEffect, useState } from "react";

let tareaId = 0;

const Formulario = () => {
    
    const [tarea, setTarea] = useState("");
    const [listadoTareas, setListadoTareas] = useState([]);
    const datosDelLocalStorage = JSON.parse( localStorage.getItem('myTarea'));
    

    useEffect(() => {
      if (datosDelLocalStorage) {
        cargaInicio()
      }
    }, [])
    
     const cargaInicio = ()=>{
        const cargaDeTarea = datosDelLocalStorage;
       setListadoTareas(  ...listadoTareas,
        cargaDeTarea)        
        
     }
    
    const agregarTarea = (e) => {
       e.preventDefault(); 
       let nuevaTarea = [
            ...listadoTareas,
            { id: tareaId++, tarea: tarea }
        ]

       !tarea == ""
       ?
            (setListadoTareas(nuevaTarea),
            localStorage.setItem('myTarea', JSON.stringify(nuevaTarea)))
            
        :
            alert("debes agregar tarea");
            
    };
    
    return (
        <section>
            <Form onSubmit={agregarTarea}>
                <Form.Group className="mb-3 d-flex " controlId="tarea">
                    <Form.Control 
                    className="me-5"
                    type="text" 
                    placeholder="Escribe tu tarea" 
                    onChange={(e)=>setTarea(e.target.value)}
                    value={tarea}
                    />
                    
                    <Button className="ms-5" variant="primary" type="submit">
                    Enviar
                    </Button>
                </Form.Group>
                
              <ListaTareas listaTarea ={listadoTareas}  /> 
                  
            </Form>
        </section>
    );
};

export default Formulario;