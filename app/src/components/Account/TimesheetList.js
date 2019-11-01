import React from 'react'
import Timesheet from './Timesheet'

const TimesheetList = ({ timesheets, changes, timesheetChanged}) =>
	timesheets.map(timesheet => {
		const { timesheet_id } = timesheet
		const timesheetUpdated = changes[timesheet_id] 
			? { timesheet_id, ...changes[timesheet_id] }
			: timesheet
		return (
			<Timesheet 
				key={timesheet.timesheet_id} 
				timesheet={timesheetUpdated}
				timesheetChanged={timesheetChanged}
			/>
		)
	})

export default TimesheetList