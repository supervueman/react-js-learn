import React from 'react';

import { Link } from 'react-router-dom';

function Toolbar() {
	return (
		<header className="toolbar">
			<menu className="toolbar--menu">
				<Link to="/" className="link toolbar--link">Home page</Link>
				<Link to="/products" className="link toolbar--link">Products page</Link>
			</menu>
		</header>
	);
}

export default Toolbar;
