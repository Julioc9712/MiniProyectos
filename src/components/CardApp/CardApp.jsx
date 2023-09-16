import React from 'react'
import './CardApp.css'

function CardApp() {
    return (
        <>
        <h1 className='titulo'>"Weatheria-Roadmap Manage"</h1>
        <div className='container-card'>
            <div className="card" >
                <img src="/image/weather.avif" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">React Weather</h5>
                    <p className="card-text">Miniproyecto React de clima: consumo de API con fetch y uso de useState y useEffect para mostrar datos meteorológicos según la ubicación.</p>
                    <a href="/Weather" className="btn btn-primary">Ir a React Weather</a>
                </div>
            </div>
            <div className="card" >
                <img src="/image/roadmap.jfif" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">React CRUD</h5>
                    <p className="card-text">Mini proyecto de React CRUD, creando una lista de objetivos de desarrollo frontend con funciones de agregar, editar y eliminar</p>
                    <a href="/Roadmap" className="btn btn-primary">Ir a React CRUD</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default CardApp