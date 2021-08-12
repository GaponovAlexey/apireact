import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import getRepos from '../api/axiosApi';
import PageOne from './pageone';
import getRepos from './../api/repos';
import { supabase } from '../superbase/supabaseClient.js';

let OneConteiner = (props) => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getRepos)
	}, [])

	console.log(supabase);

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