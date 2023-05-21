import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = (props) => {
    const {listaTarea} = props
    return (
        
            <ListGroup>
                <ItemTarea tarea = {listaTarea} ></ItemTarea>
            </ListGroup>
        
    );
};

export default ListaTareas;