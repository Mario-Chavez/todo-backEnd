import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = (props) => {
    const tareas = props.tarea
    return (
        <>
            {tareas.map((tarea) => 
                (
                <ListGroup.Item className="d-flex justify-content-between">
                    <p key={tarea.id}>{tarea.tarea}</p>
                    <Button variant="danger" >Borrar</Button>
                </ListGroup.Item>  
                ))}
        </>
    );
};

export default ItemTarea;
       