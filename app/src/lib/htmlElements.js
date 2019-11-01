import React from 'react'

const fromString = name => ({ children, reference, ...rest }) => 
	React.createElement(
		name, 
		{...rest, ref: reference}, 
		children
	)

export const Div = fromString('div')
export const Span = fromString('span')
export const A = fromString('a')
export const Ul = fromString('ul')
export const Li = fromString('li')
export const Ol = fromString('ol')
export const Form = fromString('form')
export const Input = fromString('input')
export const Button = fromString('button')
export const H1 = fromString('h1')
export const H2 = fromString('h2')
export const H3 = fromString('h3')
export const H4 = fromString('h4')
export const H5 = fromString('h5')
export const H6 = fromString('h6')
export const P = fromString('p')