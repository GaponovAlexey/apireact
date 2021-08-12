import React from 'react';

const PageOne = (props) => {
	const repos = props.repos
	return (
		<div>
			<div>
				{ repos.map((post) => <h1 key={ post.id }>{ post.client_id }</h1>) }
			</div>
		</div>
	)
}

export default PageOne;