import React from 'react'
import styles from './WeatherInfo.module.css'

export default function WeatherInfo({ weather }) {
    return (
        <>
        <div className={styles.info} >
            <div className={styles.city}>📌{weather?.location.name}-{weather?.location.country}</div>
            
            <div className={styles.time}>⏱{weather?.location.localtime}</div>
            <div className={styles.row}>
                <div >
                    <img src={`http:${weather?.current.condition.icon}`} width="200" alt={weather?.current.condition.text} />
                </div>
                <div>
                    <div className={styles.weatherCondition}>
                        
                        <div className={styles.condition}>{weather?.current.condition.text}</div>
                        <div className={styles.current}>🌡{weather?.current.temp_c}°C </div>
                        <div className={styles.current}>🌡{weather?.current.temp_f}°F</div>
                    </div>
                </div>

            </div>
            <iframe title="mapa" src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d534888.8469460616!2d${weather?.location.lon}77!3d${weather?.location.lat}6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scu!4v1693342081074!5m2!1ses-419!2scu `} width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </>
    )
}
