import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import Setmybase from './getmybase';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		setbasse: Setmybase,
	},
})


window.store = store;

export default store;