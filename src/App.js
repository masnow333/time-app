import React, {useEffect, useState} from 'react'
// import { AnimatedBackground } from './components/AnimatedBackground'
import { RenderCurrent } from './components/RenderCurrent'
import {Chart} from './components/Chart'
import {Current} from "./components/Current";

const App = () => {
	console.log('App')
	const [current, setCurrent] = useState({})
	const [dailyForecast, setDailyForecast] = useState([])
	const [data, setData] = useState({});

	useEffect(() => {
		if (!("geolocation" in navigator)) {
			alert("Geolocation is not Available, please activate the geolocation in your device settings, and recharge the page");
		}
		getCoords()
		// eslint-disable-next-line
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
	console.log(process.env.REACT_APP_SECRET_KEY, 'REACT_APP_SECRET_KEY')

	const getData = async(coords) => {
		const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&units=metric&exclude=hourly,minutely&appid=${process.env.REACT_APP_SECRET_KEY}`
		const response = await fetch(url)
		const json = await response.json()
		setCurrent(json.current)
		await setDailyForecast(json.daily)
		setData({
			labels: json.daily.map(day => new Date(day.dt * 1000).toDateString()),
			min: json.daily.map(day => day.temp.min),
			max: json.daily.map(day => day.temp.max)
		})
	}

  return (
    <>
		{/*<AnimatedBackground />*/}
		<RenderCurrent current={current} />
		<div style={{height: '50vh'}}>
			<Chart dataWithDailyForecast={data} />
		</div>
    </>
  )
}

export default App
