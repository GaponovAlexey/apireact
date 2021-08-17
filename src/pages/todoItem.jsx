import React, { useContext, useState } from 'react';
import { Context } from './context';
import './todo.css';

let TodoItem = ({ title, id, completed }) => {

	const [comp, setComp] = useState('')

	const cls = ['todo']
	if (comp) {
		cls.push('chek')
	}

	return (
		<div className={ cls.join('') } >
			<label>
				<input
					type='checkbox'
					onChange={ () => setComp(!comp) }
				/>
				<span > { title } </span>

				<i
				> deletet</i>
			</label>
		</div>
	)
}

export default TodoItem;