import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import getRepos from '../api/axiosApi';
import PageOne from './pageone';
import getRepos from './../api/repos';

let OneConteiner = (props) => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getRepos)
	}, [])


	const repos = useSelector(state => state.data.data)
	console.log(process.env);
	return (
		<div>
			<div>
				<PageOne repos={ repos } />
			</div>
		</div>
	)
}


export default OneConteiner;