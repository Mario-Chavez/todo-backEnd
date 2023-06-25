const URL_TARES = import.meta.env.VITE_API_TASKS;

// traer tareas en la db
const showTarea = async () => {
    try {
        const respuesta = await fetch(URL_TARES);
        const resp = await respuesta.json();
        return resp;
    } catch (error) {
        console.log(error);
    }
};
// agregar tareas en la db
const addTarea = async (tarea) => {
    try {
        const respuesta = await fetch(URL_TARES, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(tarea),
        });
        const resp = await respuesta.json();
        return resp;
    } catch (error) {
        console.log(error);
    }
};
