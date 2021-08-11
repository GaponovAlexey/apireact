import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getRepos from '../api/repos'

let PageOne = () => {
	const dispatch = useDispatch()
	//const repos = useSelector(state => state.resp.data)

useEffect(() => {
	dispatch(getRepos)
}, [])

	return (
		<h1>Page 1</h1>
	)
}

export default PageOne;