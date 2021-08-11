import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	data: [],
}

export const Setmybase = createSlice({
	name: 'setbasse',
	initialState,
	reducers: {
		setbase: (state, action) => {
			state.data.push(action.payload.data)
		},
	},
})
export const { setbase } = Setmybase.actions

export default Setmybase.reducer


