import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	data: [],
}

export const Setmybase = createSlice({
	name: 'setbasse',
	initialState,
	reducers: {
		setbase: (state, action) => {
			state.data = action.payload
		},
	},
})

export const { setbase } = Setmybase.actions

export default Setmybase.reducer


//const FOLLOW = 'FOLLOW';
//const initialState = {
//	data: [],
//}
//const Setmybase = (state = initialState, action) => {
//	switch (action.type) {
//		case FOLLOW:
//			return {
//				...state,
//				data: action.data
//			};
//		default:
//			return state;
//	}
//}
//export const setbase = (data) => ({ type: FOLLOW, data });
//export const { setbase } = Setmybase.actions
//export default Setmybase;


