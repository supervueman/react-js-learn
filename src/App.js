import React from 'react';
import './App.css';

import Card from './Card';
import AuthControl from './AuthControl';

const App = () => {
	const items = [1, 2, 3, 4, 5];
	return (
		<div className="App">
			<AuthControl />
			<ul>{items.map(el => <li key={el}>{el}</li>)}</ul>
			<Card name="Rinat" content="Frontend web developer" />
		</div>
	);
};

export default App;
