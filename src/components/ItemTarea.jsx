import { Button, ListGroup } from "react-bootstrap";
import { deleteTarea, showTarea } from "../helpers/queries";

const ItemTarea = ({ tarea, id, setListadoTareas }) => {
    const borrarTarea = (id) => {
        deleteTarea(id).then((resp) => {
            if (resp && resp.status === 200) {
                showTarea().then((resp) => {
                    setListadoTareas(resp);
                });
            }
        });
    };
    return (
        <ListGroup.Item className="d-flex justify-content-between">
            {tarea}
            <Button variant="danger" onClick={() => borrarTarea(id)}>
                Borrar
            </Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;
