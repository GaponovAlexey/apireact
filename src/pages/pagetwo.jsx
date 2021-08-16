import React from 'react';
import TodoItem from './todoItem';

let PageTwo = ({ todos }) => {
	return (
		<div>
			{ todos.map(value => <TodoItem key={ value.id } { ...value } />) }
		</div>
	)
}

export default PageTwo;