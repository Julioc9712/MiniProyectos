import React, { useState } from 'react'
import Crud from './Crud';
import './Listado.css'
import { data } from './data';

function Listado() {

    const [title, setTitle] = useState("")
    const [task, setTask] = useState(data)

    console.log(task)
    function handleSubmit(e) {
        e.preventDefault();
        const newtask = {
            id: crypto.randomUUID(),
            title: title,
            completed: false,

        };
        setTask([...task, newtask]);
        setTitle("")
    }

    function handleChange(e) {
        const value = e.target.value;
        setTitle(value)
    }

    function handleUpdate(id, value) {

        const temp = [...task];
        const e = temp.find(e => e.id === id)
        e.title = value;
        setTask(temp);
    }

    function handleDelete(id) {
        const temp = task.filter(e => e.id !== id);
        setTask(temp)
    }
    return (
        <>
            <div className='container-task'>
                <h1 className='titulo'>"Roadmap Manager Organiza tus Metas de Desarrollo Frontend"</h1>
                <form onSubmit={handleSubmit} className='form-container'>
                    <input value={title} onChange={handleChange} className='contenedor-title' placeholder='Introduce un objetivo' />
                    <input type="submit" onSubmit={handleSubmit} className='btn btn-primary' />
                </form>
                <div className='task'>
                    {task.map(e =>
                        <Crud key={e.id} e={e} data={data} onUpdate={handleUpdate} onDelete={handleDelete} />
                    )}
                </div>
            </div>
        </>


    )
}

export default Listado