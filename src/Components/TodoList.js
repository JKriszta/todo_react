import React, { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'



export const TodoList = (props) => {

	console.log(props.data)

	const [todos, setTodos] = useState(props.data);
	const [todo, setTodo] = useState('')

	const addTodo = (e) => {
		e.preventDefault()
		const index = todos.length + 1;
		setTodos([...todos, {id:index,item:todo}])
		setTodo('')
	}

	return(
		<section>

			<form className="form-inline">
				<input type="text" className="form-control" placeholder="add todo..." value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
				<button className="btn btn-success" onClick={(e)=>addTodo(e)}>új bejegyzés hozzáadása</button>
			</form>

			<ListGroup className="p-2">
				{todos.map(obj=><ListGroup.Item key={obj.id}>{obj.item}</ListGroup.Item>)}
			</ListGroup>

		</section>
	)
}