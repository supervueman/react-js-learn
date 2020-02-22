import React from 'react';
import './App.css';

import Card from './Card';
import AuthControl from './AuthControl';

const App = () => {
	return (
		<div className="App">
			<AuthControl />
			<Card name="Rinat" content="Frontend web developer" />
		</div>
	);
};

export default App;
