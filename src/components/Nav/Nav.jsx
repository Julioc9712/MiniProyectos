import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <>
    <div className='nav'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark " >
        <div className="container-fluid" >
        <a href="/" title="Free Weather API" target="_blanck"><img src='/image/logo.png' alt="Weather data by WeatherAPI.com" border="0" className='img-weahter'/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link " aria-current="page" href="/">Home</a>
              <a className="nav-link" href="/Weather">Weather</a>
              <a className="nav-link" href="/Roadmap">Roadmap</a>
              

            </div>
          </div>
        </div>
      </nav>
    </div>
    </>
  )
}

export default Nav