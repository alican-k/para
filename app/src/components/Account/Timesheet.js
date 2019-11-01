import React from 'react'
import { TextInput } from '../uiKit'

const Timesheet = ({ timesheet, timesheetChanged }) => {
	const { timesheet_id, start_time, end_time, error } = timesheet

	return (
		<div style={sContainer}>
			<TextInput 
				value={start_time}
				placeholder='Start date'
				onChange={start_time => timesheetChanged(timesheet_id, start_time, end_time)}
				error={error}
				containerStyle={startDate}
			/>
			<TextInput 
				value={end_time}
				placeholder='End date'
				onChange={end_time => timesheetChanged(timesheet_id, start_time, end_time)}
			/>
		</div>
	)
}

export default Timesheet

const styles = {
	sContainer: {
		display: 'flex',
		marginTop: '6px',
	},
	startDate: {
		marginRight: '10px'
	}
}

const { sContainer, startDate } = styles