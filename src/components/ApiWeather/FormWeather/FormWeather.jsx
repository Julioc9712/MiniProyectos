import React, { useState } from 'react'
import styles from './FormWeather.module.css'

function FormWeather({ onChangeCity, error, message }) {
    const [city, setCity] = useState("")

    function handleChange(e) {
        const value = e.target.value;

        if (value !== "") {
            setCity(value);
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        onChangeCity(city);
    }
    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <input 
            type="text" 
            onChange={handleChange} 
            className={styles.input} 
            helpertex={message} 
            placeholder='Introduce una Cuidad' />

            <input 
            type="submit" 
            onSubmit={handleSubmit} 
            className={styles.button} 
            value="Buscar Cuidad" />

            {!city.trim() ? 
            
            <div className="alert alert-primary" role="alert">
                ❗❗ El campo cuidad es obligatorio
            </div> 
            : " "}
            {error ? 
            <div className="alert alert-danger" role="alert">❌{message}</div> 
            : <h4></h4>}

        </form >
    )
}

export default FormWeather