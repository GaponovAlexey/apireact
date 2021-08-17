import React, { useEffect, useReducer, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PageTwo from './PageTwo';
import getRepos from './../api/repos';
import { Context } from './context';
import reducer from './reducer';


const TwoConteiner = () => {
	const [todo, setTodo] = useState([
		{ id: 1, title: 'one', completed: false },
		{ id: 2, title: 'two', completed: false }
	])
	const [useTodo, setUseTodo] = useState()
	const addTodo = e => {
		if (e.key === 'Enter') {
			setTodo([
				...todo, {
					id: Date.now(),
					title: useTodo,
					completed: false
				}
			])
			setUseTodo('')
		}
	}

	return (
		<div>
			<PageTwo todos={ todo } />
			<div>
				<input
					type='text'
					value={ useTodo }
					onChange={ (e) => setUseTodo(e.target.value) }
					onKeyPress={addTodo}
				/>
			</div>
		</div>
	)
}





export default TwoConteiner;