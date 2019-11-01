import { assocPath, map } from 'ramda'
import moment from 'moment'
import {
	SET_ACCOUNT_ID, SUBMIT_ACCOUNT_ID, CLOSE_MODAL, TIMESHEETS_FULFILLED, TIMESHEET_CHANGED, SAVE_TIMESHEETS, TIMESHEETS_SAVED
} from './action'
import { TIME_FORMAT } from '../../utils/constants'
import checkTimesheetError from '../../utils/checkTimesheetError'

export const initialState = {
	accountId: '',
	display: false,
	isDirty: false, 
	idError: 'Required',

	fetching: false,
	saving: false,
	timesheets: [],
	changes: {},
	timesheetsError: '',
}

const reducer = (state, action) => {
	switch (action.type) {
		
		case SET_ACCOUNT_ID: {
			const { accountId } = action.payload
			
			const isNumeric = /^\d+$/.test(accountId.trim())
			const isEmpty = accountId.trim().length === 0
			
			const idError = isEmpty ? 'Required' : !isNumeric ? 'Only numeric values accepted!' : ''
			const isDirty = true

			return { ...state, accountId, idError, isDirty }
		}

    case SUBMIT_ACCOUNT_ID: {
			const display = !Boolean(state.idError) 
			return {...state, display, fetching: true }
		}

		case CLOSE_MODAL: {
			return initialState
		}

		case TIMESHEETS_FULFILLED: {
			const timesheets = map(t => {
				const start_time = moment.utc(t.start_time).format(TIME_FORMAT)
				const end_time = moment.utc(t.end_time).format(TIME_FORMAT)
				const error = checkTimesheetError({ start_time, end_time })
				return { ...t, start_time, end_time, error }
			})(action.payload.timesheets)

			const fetching = false
			return { ...state, timesheets, fetching }
		}

		case TIMESHEET_CHANGED: {
			const { timesheet_id, data } = action.payload
			const error = checkTimesheetError(data)
			const dataWithError = {...data, error }
			return assocPath(['changes', timesheet_id], dataWithError)(state)
		}

		case SAVE_TIMESHEETS: {
			const timesheets = map(t => {
				const { timesheet_id } = t
				const data = state.changes[timesheet_id] || { timesheet_id }
				return {...t, ...data}
			})(state.timesheets)

			const changes = {}
			return {...state, timesheets, changes, saving: true}
		}

		case TIMESHEETS_SAVED: {
			return {...state, saving: false}
		}

    default:
      return state;
  }
}

export default reducer