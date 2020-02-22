import React from 'react';
import './App.css';

import Card from './Card';

const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<Card name="Rinat" content="Frontend web developer" />
			</header>
		</div>
	);
};

export default App;
