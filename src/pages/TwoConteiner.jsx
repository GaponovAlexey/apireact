import React, { useEffect, useReducer, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PageTwo from './PageTwo';
import getRepos from './../api/repos';
import { Context } from './context';
import reducer from './reducer';


const TwoConteiner = () => {
		let dispatchs = useDispatch();
		useEffect(() => {
			dispatchs(getRepos)
		}, [])
		let repos = useSelector(state => state.data.data)
	//let ids = repos.map(post => post.id)

	const [state, dispatch] = useReducer(reducer,
		JSON
	)

	let [todos, setTodos] = useState([repos])
	let [todoTitle, setTodoTitle] = useState('')

	const handleClick = () => {
		console.log('cick');
	}

	useEffect(() => {
		document.addEventListener('click', handleClick)
		const row = localStorage.getItem('todos') || []
		setTodos(JSON.parse(row))
		return () => {
			document.removeEventListener('click', handleClick)
		}
	}, [])


	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	})


	//const addTodo = e => {
	//	if (e.key === 'Enter') {
	//		setTodos([
	//			...todos, {
	//				id: Date.now(),
	//				title: todoTitle,
	//				completed: false,
	//			}
	//		])
	//		setTodoTitle('')
	//	}
	//}

	const addTodo = e => {
		if (e.key === 'Enter') {
			setTodos([
				...todos, {
				id: Date.now(),
				title: todoTitle,
				completed: false,
			}
			])
			setTodoTitle('')
	}
}

const removeTodo = id => {
	setTodos(todos.filter(todo => {
		return todo.id !== id
	}))
}

const toggleTodo = id => {
	setTodos(todos.map(todo => {
		if (todo.id === id) {
			todo.completed = !todo.completed
		}
		return todo
	}))
}

return (
	<Context.Provider value={ {
		removeTodo, toggleTodo
	} }>

		<div>
			<div>
				<div>
					<PageTwo todos={ todos } />
				</div>
				<input type='text'
					value={ todoTitle }
					onChange={ e => setTodoTitle(e.target.value) }
					onKeyPress={ addTodo }
				/>
				<label>ToDo name</label>
				<div>
					<button  >+1</button>
					<button onClick={ () => alert('hisbala') }>sdasd</button>
				</div>
			</div>
		</div>
	</Context.Provider>
)
}





export default TwoConteiner;