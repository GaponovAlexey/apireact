import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageOne from './pageone';
import getRepos from './../api/repos';

let OneConteiner = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getRepos)
	}, [])


	const repos = useSelector(state => state.data.data)

	return (
		<div>
			<div>
				<PageOne repos={ repos } />
			</div>
		</div>
	)
}

export default OneConteiner;