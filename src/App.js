import React, { useState, useEffect } from 'react';

function App() {
	const [user, setUser] = useState({ id: 1, name: 'Rinat' });

	// По принципу componentDidMount и componentDidUpdate:
	useEffect(() => {
		// Обновляем заголовок документа, используя API браузера
		document.title = `Вы нажали ${user.name} ${user.job} раз!`;
	});

	return (
		<div>
			<p>Вы нажали {user.name} {user.job} раз</p>
			<button onClick={() => setUser({ id: 1, name: 'Rinat', job: 'Frontend web developer' })}>
				Нажми на меня
      </button>
		</div>
	);
}

export default App;
