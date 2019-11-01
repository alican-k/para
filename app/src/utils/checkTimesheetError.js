import moment from 'moment'
import { TIME_FORMAT } from './constants'

const checkTimesheetError = (timesheet) => {
	const { start_time, end_time } = timesheet
	const startTime = moment.utc(start_time, TIME_FORMAT, true)
	const endTime = moment.utc(end_time, TIME_FORMAT, true)

	return !startTime.isValid()
		? 'Format of start time is not valid'
		: !endTime.isValid()
			? 'Format of end time is not valid'
			: startTime.isSameOrAfter(endTime)
				? 'Start time must be earlier'
				: ''
}

export default checkTimesheetError