import React, {useEffect, useState} from 'react'

import {Current} from './Current'

export const FetchTimeApi = () => {

    const [current, setCurrent] = useState({})

    useEffect(() => {
        if ("geolocation" in navigator) {
            console.log("Available");
        } else {
            console.log("Not Available");
        }

        getCoords()
    }, [])

    const getCoords = async () => {
        navigator.geolocation.getCurrentPosition( position => {

            const data = {
                lat: position.coords.latitude,
                lon: position.coords.longitude
            }

            console.log(data)

            getData(data)
      
        }, () => {
            alert('puto el que lo lea')
            /* navigator.geolocation.getCurrentPosition( coords => {
                console.log(coords);
              }); */
        });
    }

    const getData = async(coords) => {
        console.log(coords)
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&units=metric&exclude=hourly,minutely&appid=35b12780d58712af0ea68c3f0cacbba0`
        const response = await fetch(url)
        const json = await response.json()
        setCurrent(json.current)
    }



    return (
        <>
            <Current current={current} />
            
            {/* { current.rain ? current.rain : null} */}
        </>
    )
}