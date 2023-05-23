import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useEffect, useState } from "react";



const Formulario = () => {
    
    const [tarea, setTarea] = useState("");
    const datosDelLocalStorage = JSON.parse( localStorage.getItem('myTarea')) || [];
    const [listadoTareas, setListadoTareas] = useState(datosDelLocalStorage);
    

    useEffect(() => {
      localStorage.setItem("myTarea",JSON.stringify(listadoTareas))
    }, [listadoTareas])
    
    
    const handlerSubmit = (e) => {
       e.preventDefault(); 
       !tarea == ""
       ?
            (setListadoTareas([...listadoTareas,tarea]),
            setTarea(""))
        :
            alert("debes agregar tarea");
    };
    
    const borrarTarea = (nombreTarea)=>{
    let arregloFiltrado = listadoTareas.filter((itemTarea)=>itemTarea !== nombreTarea)
    setListadoTareas(arregloFiltrado)
    }

    return (
        <section>
            <Form onSubmit={handlerSubmit}>
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
                
              <ListaTareas listaTarea ={listadoTareas} borrarTarea= {borrarTarea}/> 
                  
            </Form>
        </section>
    );
};

export default Formulario;