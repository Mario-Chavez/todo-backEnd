import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({ tarea, id, borrarTarea }) => {
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
