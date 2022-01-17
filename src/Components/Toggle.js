import React, { useState } from 'react'

export const Toggle = () => {

	const [isHappy, setIsHappy] = useState(true)

	// stílus objektum
	let myStyle = {
		backgroundColor: isHappy ? 'green' : 'red',
		padding: '1rem',
		margin: '1rem',
		color: 'white'
	}
	return(
		<section>
			<button style={myStyle} onClick={()=>setIsHappy(!isHappy)}>Are you happy?{isHappy ? '😊' : '😒'}</button>
		</section>
	)
}