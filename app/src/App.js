import React from 'react'
import Home from './components/Home'
import AccountContainer from './containers/Account'
import './app.module.css'

const App = () =>	
	<AccountContainer.Provider>
		<Home />
	</AccountContainer.Provider>

export default App
