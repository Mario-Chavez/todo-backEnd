import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useEffect, useState } from "react";
import { addTarea, deleteTarea, showTarea } from "../helpers/queries";
import { useForm } from "react-hook-form";

const Formulario = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const [listadoTareas, setListadoTareas] = useState([]);

    useEffect(() => {
        showTarea().then((resp) => {
            setListadoTareas(resp);
        });
    }, []);

    const onSubmit = (newTarea) => {
        addTarea(newTarea).then((resp) => {
            if (resp) {
                showTarea().then((resp) => {
                    setListadoTareas(resp);
                });
                reset();
            } else {
                console.log("no se pudo agregar");
            }
        });
    };

    return (
        <section>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3 d-flex " controlId="tarea">
                    <Form.Control
                        className="me-5"
                        type="text"
                        placeholder="Escribe tu tarea"
                        {...register("title", {
                            required: "este campo es obligatorio",
                        })}
                    />

                    <Button className="ms-5" variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form.Group>

                <ListaTareas
                    listaTarea={listadoTareas}
                    setListadoTareas={setListadoTareas}
                />
            </Form>
        </section>
    );
};

export default Formulario;
