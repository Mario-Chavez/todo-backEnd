import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ listaTarea, setListadoTareas }) => {
    return (
        <ListGroup>
            {listaTarea.map((tarea) => (
                <ItemTarea
                    key={tarea.id}
                    tarea={tarea.title}
                    id={tarea.id}
                    setListadoTareas={setListadoTareas}
                ></ItemTarea>
            ))}
        </ListGroup>
    );
};

export default ListaTareas;
