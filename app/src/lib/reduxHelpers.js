import { map } from 'ramda'

export const actionCreator = (type, payload) => ({type, payload})

export const connectActions = dispatch => 
	map(actionCreator => {
		return (...params) => {
			const action = actionCreator(...params)
			return dispatch(action)
		}
	})