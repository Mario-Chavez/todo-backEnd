import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ listaTarea, setListadoTareas }) => {
    return (
        <ListGroup>
            {listaTarea.map((tarea) => (
                <ItemTarea
                    key={tarea._id}
                    tarea={tarea.title}
                    id={tarea._id}
                    setListadoTareas={setListadoTareas}
                ></ItemTarea>
            ))}
        </ListGroup>
    );
};

export default ListaTareas;
