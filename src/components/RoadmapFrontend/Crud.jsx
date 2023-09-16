import React, { useState } from 'react'
import "./Crud.css"

function Crud({ e, onUpdate, onDelete, data }) {

    const [edit, setEdit] = useState(false);


    function FormEdit() {

        const [newTitle, setNewTitle] = useState(e.title)
        function handleSubmit(e) {
            e.preventDefault();
        }
        function handleChangeEdit(e) {
            const value = e.target.value
            setNewTitle(value);
        }

        function handleActualizar() {
            onUpdate(e.id, newTitle);
            setEdit(false);
        }
        return <form onSubmit={handleSubmit} className='container-map'>
            <input type="text" value={newTitle} onChange={handleChangeEdit} className='edit-title' />
            <button onClick={handleActualizar} className='btn btn-success'>Actualizar</button>
        </form>

    }

    function ListaTask() {

        const [completed, setCompleted] = useState(e.completed)

        return (
            <div className='container-map'>
                <input type="checkbox" onClick={() => setCompleted(!completed)} defaultChecked={completed} className="checkbox"/>
                <div 
                    className={completed ? "e-title-completed" : "e-title"}>
                    {completed ? <span >✅</span> : <span >❌</span>}
                    {e.title}
                 </div>

                <button onClick={() => setEdit(true)} className='btn btn-success'>Editar</button>

                <button onClick={(event => onDelete(e.id))} className='btn btn-danger'>
                    Eliminar
                </button>
            </div>
        )
    }
    return (
        <div>{edit ? <FormEdit /> : <ListaTask />}</div>
    )
}

export default Crud