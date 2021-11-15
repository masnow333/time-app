import React from 'react'
import './Current.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Current = ({current}) => {

    if(current === undefined){
        return <></>
    }else if(!current.weather){
        return <></>
    }


    let url = `http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`


    return (
        <div className="card bg-secondary m-3 text-light dGrid" style={{width: '250px', height: 400 + 'px'}}>
            <img className="card-img-top row" src={url} alt={current.weather[0].description} style={{width: 'fit-content'}}/>

            <div className="card-body">
                <h5 className="card-title h1">{current.temp}°</h5>
                <p className="card-text h5">Humidity: {current.humidity}%</p>
                <p className="card-text h5">Wind: {current.wind_speed} m/s</p>
            </div>
        </div>
    )

}
