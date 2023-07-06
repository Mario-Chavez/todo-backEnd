import { Button, Modal, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { editTarea, getTareaId, showTarea } from "../helpers/queries";
import { useEffect } from "react";

const ModalTareas = ({ show, handleClose, setListadoTareas, id }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();

    useEffect(() => {
        getTareaId(id).then((resp) => {
            if (resp) {
                setValue("title", resp.title);
            } else {
                console.log("sin respuesta");
            }
        });
    }, []);

    const onSubmit = (newTask) => {
        editTarea(id, newTask).then(() => {
            showTarea().then((resp) => {
                setListadoTareas(resp);
                handleClose(true);
            });
        });
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Tarea</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3 d-flex " controlId="tarea">
                        <Form.Control
                            className="me-5"
                            type="text"
                            placeholder="Escribe tu tarea"
                            {...register("title", {
                                required: "este campo es obligatorio",
                                minLength: {
                                    value: 2,
                                    message:
                                        "La tarea debe tener como minimo 2 caracteres",
                                },
                                maxLength: {
                                    value: 150,
                                    message:
                                        "La tarea debe tener  como maximo 150 caracteres",
                                },
                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.title?.message}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <div className="my-5 d-flex justify-content-center ">
                            <Button type="submit" className="px-5 ">
                                Editar
                            </Button>
                        </div>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
        </Modal>
    );
};

export default ModalTareas;
