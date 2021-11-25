import React, {useEffect, useState} from 'react'

import {Current} from './Current'

export const FetchTimeApi = () => {

    const [current, setCurrent] = useState({})

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            alert("Geolocation is not Available, please activate the geolocation in your device settings, and recharge the page");
        }

        getCoords()
    }, [])

    const getCoords = async () => {
        navigator.geolocation.getCurrentPosition( position => {

            const data = {
                lat: position.coords.latitude,
                lon: position.coords.longitude
            }
            getData(data)
      
        }, () => {
            alert("You can't see the content of this page, if you don't give permission to geolocation, please reload the page and try again.")
        });
    }

    const getData = async(coords) => {
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&units=metric&exclude=hourly,minutely&appid=35b12780d58712af0ea68c3f0cacbba0`
        const response = await fetch(url)
        const json = await response.json()
        setCurrent(json.current)
    }



    return (
        <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: '100vh' }}>
            <h1 className="position-relative text-light text-center mb-5" >Time App</h1>
            <Current current={current} />
            
            {/* { current.rain ? current.rain : null} */}
        </div>
    )
}