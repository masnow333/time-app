import React from 'react'

import {Current} from './Current'
import {Chart} from "./Chart";

export const RenderCurrent = ({current}) => {
	console.log(RenderCurrent, 'RenderCurrent')
	return (
		<div className="d-flex justify-content-center align-items-center flex-column">
			<h1 className="position-relative text-light text-center	pt-5" >Time App</h1>
			<Current current={current} />
		</div>
    )
}
