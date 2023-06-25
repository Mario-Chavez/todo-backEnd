import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ listaTarea, borrarTarea }) => {
    return (
        <ListGroup>
            {listaTarea.map((tarea) => (
                <ItemTarea
                    key={tarea.id}
                    tarea={tarea.title}
                    id={tarea.id}
                    borrarTarea={borrarTarea}
                ></ItemTarea>
            ))}
        </ListGroup>
    );
};

export default ListaTareas;
