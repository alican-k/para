import React from 'react'
import AccountContainer from '../containers/Account'
import Account from './Account'
import { TextInput, Button } from './uiKit'
import textStyles from './text.styles'
import { styler } from '../lib'

const Home = () => {
	const [state, {submitAccountId, setAccountId}] = AccountContainer.useContainer()
	const {accountId, isDirty, idError, display} = state
	
	return (
		<div style={sRoot}>
			<div style={sContainer}>
				<h1 style={styler(fGill, fCenter, fSize28)}>
					React Coding Challenge
				</h1>
				<TextInput 
					placeholder='Enter Account Id'
					value={accountId}
					onChange={setAccountId}
					error={isDirty && idError}
					containerStyle={sInput}
				/>
				<Button 
					title='Display Timesheets'
					primary
					deactive={Boolean(idError)}
					onClick={submitAccountId}
				/>

			</div>
			{display && <Account />}
		</div>
	)
}

export default Home

const styles = {
	sRoot: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	sContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignSelf: 'center',
		paddingTop: '30px',
		width: '30%'
	},
	sInput: {
		margin: '20px 0 15px 0',
	},
}

const { sRoot, sContainer, sInput } = styles
const { fGill, fCenter, fSize28 } = textStyles

