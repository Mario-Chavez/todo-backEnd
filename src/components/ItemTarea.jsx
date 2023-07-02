import { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { deleteTarea, showTarea, editTarea } from "../helpers/queries";
import ModalTareas from "./ModalTareas";

const ItemTarea = ({ tarea, id, setListadoTareas }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
        <>
            <ListGroup.Item className="d-flex justify-content-between">
                {tarea}
                <div>
                    <Button variant="warning" className="me-2" onClick={handleShow}>
                        Editar
                    </Button>
                    <Button variant="danger" onClick={() => borrarTarea(id)}>
                        Borrar
                    </Button>
                </div>
            </ListGroup.Item>
            <ModalTareas
                show={show}
                handleClose={handleClose}
                tarea={tarea}
                setListadoTareas={setListadoTareas}
            />
        </>
    );
};

export default ItemTarea;
