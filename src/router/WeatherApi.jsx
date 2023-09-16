import React from 'react'



import Weather from '../components/ApiWeather/Weather/Weather'
import Footer from '../components/Footer/Footer'
import Nav from '../components/Nav/Nav'

function WeatherApi() {
  return (
    <>
    <Nav/>
    <Weather/>
    <Footer/>
    </>
  )
}

export default WeatherApi