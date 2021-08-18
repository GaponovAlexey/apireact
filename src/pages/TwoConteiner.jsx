import React, { useEffect, useReducer, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getRepos from './../api/repos';
import { Context } from './context';
import reducer from './reducer';
import PageTwo from './pagetwo';


const TwoConteiner = () => {

	const [todo, setTodo] = useState([
		{id: 1, title: 'hi povtorjalka', completed: false},
		{id: 2, title: 'hi js', completed: false},
		{id: 3, title: 'hi react', completed: false}
	])
	const [todouse, setTodoUse] = useState()

	const addTodo = e => {
		if (e.key === 'Enter') {
			setTodo([
				...todo, {
					id: Date.now(),
					title: todouse,
					completed: false,
				}
			])
			setTodoUse('')
		}
	}
	return (
		<div>
			<PageTwo todos={ todo } />
			<div>
				<input
					type='text'
					value={todouse}
					onChange={(e) => setTodoUse(e.target.value)}
					onKeyPress={addTodo}
					
				/>
			</div>
		</div>
	)
}





export default TwoConteiner;