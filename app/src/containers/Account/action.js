import { actionCreator as ac, connectActions } from '../../lib'

/* Action Types */

export const SET_ACCOUNT_ID = 'SET_ACCOUNT_ID'

export const SUBMIT_ACCOUNT_ID = 'SUBMIT_ACCOUNT_ID'

export const CLOSE_MODAL = 'CLOSE_MODAL'

export const TIMESHEETS_FULFILLED = 'TIMESHEETS_FULFILLED'

export const TIMESHEET_CHANGED = 'TIMESHEET_CHANGED'

export const SAVE_TIMESHEETS = 'SAVE_TIMESHEETS'

export const TIMESHEETS_SAVED = 'TIMESHEETS_SAVED'


/* Action Creators */

export const setAccountId = accountId => ac(SET_ACCOUNT_ID, { accountId })

export const submitAccountId = () => ac(SUBMIT_ACCOUNT_ID)

export const closeModal = () => ac(CLOSE_MODAL)

export const timesheetsFulfilled = timesheets => ac(TIMESHEETS_FULFILLED, {timesheets})

export const timesheetChanged = (timesheet_id, start_time, end_time) => 
	ac(TIMESHEET_CHANGED, { timesheet_id, data: {start_time, end_time} })

export const saveTimesheets = () => ac(SAVE_TIMESHEETS)

export const timesheetsSaved = () => ac(TIMESHEETS_SAVED)