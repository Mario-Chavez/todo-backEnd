import { Button, ListGroup } from "react-bootstrap";
import { deleteTarea, showTarea, editTarea } from "../helpers/queries";

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
    const editarTarea = (id, tarea) => {
        console.log(tarea, id);
        // editTarea(id).then((resp) => {
        //     if (resp && resp.status === 200) {
        //         showTarea().then((resp) => {
        //             setListadoTareas(resp);
        //         });
        //     }
        // });
    };
    return (
        <ListGroup.Item className="d-flex justify-content-between">
            {tarea}
            <div>
                <Button
                    variant="warning"
                    className="me-2"
                    onClick={() => editarTarea(id, tarea)}
                >
                    Editar
                </Button>
                <Button variant="danger" onClick={() => borrarTarea(id)}>
                    Borrar
                </Button>
            </div>
        </ListGroup.Item>
    );
};

export default ItemTarea;
