import React, { useContext, useState } from 'react';
import { Context } from './context';

let TodoItem = ({ title, id, completed }) => {


	const [checked, setChecked] = useState(completed)
	const { toggleTodo, removeTodo } = useContext(Context)


	const cls = ['todo']
	if (completed) {
		cls.push('completed')
	}
	return (
		<div className={ cls.join('') }>
			<label>
				<input
					type='checkbox'
					checked={ completed }
					onChange={ () => toggleTodo(id)}
				/>
				<span > { title } </span>

				<i 
				onClick={()=> removeTodo(id)}
				> deletet</i>
			</label>
		</div>
	)
}

export default TodoItem;