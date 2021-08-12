import { useEffect } from 'react';
import { setbase } from '../Redux/getmybase';
//import useSWR from 'swr'



const getRepos = async (dispatch) => {
	const res = await fetch('https://iakjucmhukqakhswuqgh.supabase.co/rest/v1/calls?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzgzMTg0OCwiZXhwIjoxOTQzNDA3ODQ4fQ.IvTqqvidDxgLV_nqYd0VFPV9p4I-h1mNsuc9tkt1daI')
	const data = await res.json()
	if (res.status !== 200) {
		throw new Error(data.message)
	}
	return dispatch(setbase(data))

}


export default getRepos;

