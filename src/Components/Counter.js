import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'




export const Counter = () => {

	const [count, setCount] = useState(0);


	return(
		<section className="row bg-secondary text-white justify-content-even">
			<h3 className="w-100">Counter</h3>
			<div className="col-md p-2">
				<Button className="" variant="success" onClick={() => setCount(count+1)}>+</Button>
			</div>
			<div className="col-md p-2">
				<p>A számláló értéke: <b>{count}</b>
				</p>
			</div>
			<div className="col-md p-2">
				<Button className="" variant="danger" onClick={() => setCount(count-1)}>-</Button>
			</div>
		</section>
	)
}