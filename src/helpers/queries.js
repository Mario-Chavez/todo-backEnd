const URL_TAREAS = import.meta.env.VITE_API_TASKS;

// traer tareas en la db
export const showTarea = async () => {
    try {
        const respuesta = await fetch(URL_TAREAS);
        const resp = await respuesta.json();
        return resp;
    } catch (error) {
        console.log(error);
    }
};
// agregar tareas en la db
export const addTarea = async (tarea) => {
    try {
        const respuesta = await fetch(URL_TAREAS, {
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
export const deleteTarea = async (id) => {
    try {
        const respuesta = await fetch(`${URL_TAREAS}/${id}`, {
            method: "DELETE",
        });

        return respuesta;
    } catch (error) {
        console.log(error);
    }
};
export const editTarea = async (id, tarea) => {
    try {
        const respuesta = await fetch(`${URL_TAREAS}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(tarea),
        });

        return respuesta;
    } catch (error) {
        console.log(error);
    }
};
