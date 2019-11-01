import React, { useState } from 'react'
import { styler } from '../../lib'
import textStyles from '../text.styles'

const TextInput = ({ value, onChange, placeholder, error, containerStyle }) => {
	const [focused, setFocused] = useState(false)
	
	const inputStyle = styler(sInput, focused && sFocused, fGill, fSize16)
	const cStyle = styler(sContainer, containerStyle)
	const errorStyle = styler(fSize12, fGill, sError, colorError)

	return (
		<div style={cStyle}>
			<input 
				type='text'
				placeholder={placeholder}
				value={value} 
				onChange={e => onChange(e.target.value)}
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
				style={inputStyle}
			/>
			<span style={errorStyle}>
				{error && ('*' + error)}
			</span>
		</div>
	)
}

export default TextInput

const styles = {
	sContainer: {
		display: 'flex',
		flexDirection: 'column',
	},
	sInput: {
		outline: 'none',
		height: '32px',
		border: '1px solid #eeeeee',
		borderRadius: '5px',
		backgroundColor: '#f8f8f8',
		padding: '0 8px 0 8px',
	},
	sFocused: {
		backgroundColor: 'white',
	},
	sError: {
		margin: '4px 0 0 10px',
		height: '15px',
	},
}

const { sContainer, sInput, sFocused, sError } = styles
const { fGill, fSize12, fSize16, colorError } = textStyles