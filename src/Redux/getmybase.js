const FOLLOW = 'FOLLOW';


const initialState = {
	data: [],
}
const Setmybase = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				data: action.data
			};
		default:
			return state;
	}
}
export const setbase = (data) => ({ type: FOLLOW, data });
//export const { setbase } = Setmybase.actions

export default Setmybase;


