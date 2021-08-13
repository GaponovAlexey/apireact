import React from 'react';

let PageTwo = ({ id, client_id, call_start }) => {

	return (
		<div>
			<div>
				<input type='checkbox'
					defaultChecked={ false }
				/>
				<span>{ id }</span>
				<span>{ client_id }</span>
				<span>{ call_start }</span>
			</div>
		</div>
	)
}

export default PageTwo;