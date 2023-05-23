import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({listaTarea, borrarTarea}) => {
    
    return (
        
            <ListGroup>
                {listaTarea.map((tarea,index)=> <ItemTarea key={index}  tarea ={tarea} borrarTarea ={borrarTarea} ></ItemTarea>)}
            </ListGroup>
        
    );
};

export default ListaTareas;