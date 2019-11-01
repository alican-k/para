import { useReducer, useEffect } from 'react'
import { createContainer } from 'unstated-next'
import { URL_BASE } from '../../utils/constants'
import {
	setAccountId, submitAccountId, closeModal, timesheetsFulfilled, timesheetChanged, saveTimesheets, timesheetsSaved
} from './action'
import { connectActions } from '../../lib'
import reducer, { initialState } from './reducer'

const useAccount = () => {
	const [state, dispatch] = useReducer(reducer, initialState)

	let actions = connectActions(dispatch)({ 
		setAccountId, submitAccountId, closeModal, timesheetsFulfilled, timesheetChanged, saveTimesheets, timesheetsSaved
	})

	const { accountId, fetching, saving } = state

	useEffect(() => {
		const url = `${URL_BASE}?account_id=${accountId}`

		fetching && fetch(url)
			.then(res => res.json())
			.then(res => actions.timesheetsFulfilled(res.data.timesheets))
			.catch(err => console.log('error while fetching: ', err))

	}, [fetching])

	useEffect(() => {
		const config = {
			method: 'PATCH',
			headers: {
				// 'Accept': 'application/json',
				'Content-Type': 'application/json' 
			}
		}
		const url = `${URL_BASE}?account_id=${accountId}`
		saving && fetch(url, config)
			.then(res => res.json())
			.then(res => {
				actions.timesheetsSaved()
				actions.closeModal()
			})
			.catch(err => {
				console.log('error while fetching: ', err)
				actions.closeModal()
			})

	}, [saving])

	return [state, actions]
}

export default createContainer(useAccount)