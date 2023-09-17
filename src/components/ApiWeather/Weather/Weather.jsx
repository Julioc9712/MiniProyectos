import React, { useEffect, useState } from 'react'
import FormWeather from '../FormWeather/FormWeather';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import styles from '../Weather/Weather.module.css'
import Loading from '../Loading/Loading';


function Weather() {
    const [weather, setWeather] = useState(null);
    const VITE_API_KEY = "8fcbbed517e647c6af7185957232908"
    const [error, setError] = useState({
        error: false,
        message: "",
    })

    useEffect(() => {
        loadInfo();
    }, [])

    useEffect(() => {
        document.title = `Weather | ${weather?.location.name ?? ""}`
    }, [weather])

    async function loadInfo(city = 'london') {
        setError({
            error: false,
            message: "",
        })
        
        try {
            if (!city.trim()) throw { message: "El campo cuidad es obligatorio" } 
            const request = await fetch(`https://api.weatherapi.com/v1/current.json?key=${VITE_API_KEY}&q=${city}&aqi=no`);
            const data = await request.json();
            if (data.error) throw { message: data.error.message }
            
            setWeather(data);
             console.log(data) 
        } catch (error) {
            
           setError({
                error: true,
                message: "La cuidad no se encuentra",
            })
        }
    }

    function handleChangeCity(city) {
        setWeather(null);
        loadInfo(city);
    }
    return (
        <div className={styles.weatherContainer}>
            <h2 className='titulo'> "Weatheria Tu Pronóstico Personalizado"</h2>
            <FormWeather onChangeCity={handleChangeCity} error={error.error} message={error.message}/>
            {weather ? <WeatherInfo weather={weather}  /> : <Loading />}

        </div>
    )
}

export default Weather
