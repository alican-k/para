import React from 'react'
import { styler } from '../../lib'
import textStyles from '../text.styles'

const Button = ({ 
	onClick, 
	containerStyle,
	primary, simple, link,
	deactive,
	title 
}) => {
	const type = primary ? sPrimary : simple ? sSimple : sLink
	const style = styler(sDefault, type, deactive && sDeactive, sBig, fSize16, fGill, containerStyle)

	return (
		<button onClick={onClick} style={style}>
			{ title }
		</button>
	)
}

export default Button

const styles = {
	sDefault: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		outline: 'none',
		border: 'none',
		cursor: 'pointer',
	},
	sPrimary: {
		backgroundColor: 'red',
		borderRadius: '5px',
		color: 'white',
	},
	sSimple: {
		border: '1px solid grey',
		borderRadius: '5px',
		...textStyles.colorDark,
	},
	sLink: {
		color: 'blue',
	},
	sDeactive: {
		opacity: 0.5
	},
	sBig: {
		height: '32px'
	}
}

const { sDefault, sPrimary, sLink, sSimple, sDeactive, sBig } = styles
const { fGill, fSize16 } = textStyles
