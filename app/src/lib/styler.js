import { reduce } from 'ramda'

export const styler = (...params) => reduce(
	(acc, val) => ({ ...acc, ...val }), 
	{}
)(params)
