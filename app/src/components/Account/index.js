import React from 'react'
import AccountContainer from '../../containers/Account'
import TimesheetList from './TimesheetList'
import { styler } from '../../lib'
import { Button } from '../uiKit'
import textStyles from '../text.styles'

const Account = () => {
	const [state, { closeModal, timesheetChanged, saveTimesheets }] = AccountContainer.useContainer()
	const { accountId, timesheets, fetching, changes } = state
	
	return (
		<div style={container} onClick={closeModal}>
			<div style={content} onClick={e => e.stopPropagation()}>
				<h2 style={sTitle}>Account id: {accountId}</h2>

				<div style={fGill}>
					<span>Format: </span>
					<code>'YYYY-MM-DD HH:mm:ss'</code>
				</div>
				<div style={fGill}>
					<span>Example: </span>
					<code>'2019-11-03 23:25:23'</code>
				</div>

				<TimesheetList 
					timesheets={timesheets} 
					changes={changes}
					timesheetChanged={timesheetChanged}
				/>

				<Button simple big title='Cancel' onClick={closeModal} containerStyle={sCancel} />
				<Button primary big title='Save' onClick={saveTimesheets} />
			</div>
		</div>
	)
}

export default Account

const styles = {
	container: {
		position: 'fixed',
		top: '0px', right: '0px', bottom: '0px', left: '0px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0, 0.5)',
		padding: '24px',
		pointerEvents: 'all',
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		padding: '24px',
		backgroundColor: 'white',
		borderRadius: '5px',
		overflow: 'scroll',
		// margin: '10px',
		maxHeight: '500px'
	},
	sCancel: {
		margin: '16px 0 12px 0',
		pointerEvents: 'all',
	},
	sInfo: {

	}
}

const { container, content, sCancel } = styles
const { fGill, fSize18, colorGrey } = textStyles
const sTitle = styler(fGill, fSize18, colorGrey)