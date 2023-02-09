import React, {useEffect, useState} from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import { faker } from '@faker-js/faker';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: 'Forecast',
		},
	},
};

export function Chart({dataWithDailyForecast}) {

	const [dataChart, setDataChart] = useState({
		labels: [],
		datasets: [
			{
				label: 'Min daily temperature',
				data: [],
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
			{
				label: 'Max daily temperature',
				data: [],
				borderColor: 'rgb(53, 162, 235)',
				backgroundColor: 'rgba(53, 162, 235, 0.5)',
			},
		],
	});
	useEffect(() => {
		setDataChart({
			labels: dataWithDailyForecast.labels,
			datasets: [
				{
					label: 'Min daily temperature',
					data: dataWithDailyForecast.min,
					borderColor: 'rgb(53, 162, 235)',
					backgroundColor: 'rgba(53, 162, 235, 0.5)',
				},
				{
					label: 'Max daily temperature',
					data: dataWithDailyForecast.max,
					borderColor: 'rgb(255, 99, 132)',
					backgroundColor: 'rgba(255, 99, 132, 0.5)',
				},
			],
		}) // eslint-disable-next-line
		console.log(dataChart, 'dataWithDailyForecast')
		// eslint-disable-next-line
	}, [dataWithDailyForecast]);


	return <Line height={250} options={options} data={dataChart} />;
}
