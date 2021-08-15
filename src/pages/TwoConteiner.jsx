import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getRepos from '../api/repos';
import PageTwo from './pagetwo';




const TwoConteiner = () => {
	let dispatch = useDispatch();
	useEffect(() => {
		dispatch(getRepos)
	}, [])
	let repos = useSelector(state => state.data.data)
	let id = repos.map(post => post.id)
	let [todos, setTodos] = useState(
		{ id: 1, title: 'first todo', completed: false },
		{ id: 2, title: 'second todo', completed: false },
	)

	let [todoTitle, setTodoTitle] = useState('')

	let addTodo = event => {
		if (event.key === 'Enter') {
			setTodos([
				...todos,
				{
					id: Date.now(),
					title: todoTitle,
					completed: false
				}
			])
		}
	}
	console.log(todos);

	return (
		<div>
			<div>
				<div>
				</div>
				<input type='text'
					value={ todoTitle }
					onChange={ event => setTodoTitle(event.target.value) }
					onKeyPress={ addTodo }
				/>
				<label>ToDo name</label>
				<div>
					<button  >+1</button>
					<button onClick={ () => alert('hi') }>sdasd</button>
				</div>
			</div>
		</div>
	)
}



export default TwoConteiner;