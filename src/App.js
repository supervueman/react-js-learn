import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/Index';
import ProductsPage from './pages/Products';
import ProductPage from './pages/Product';

// Components
import Toolbar from './components/Toolbar';

function App() {
	return (
		<div className="app">
			<Toolbar />
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
				<Route path="/products/:slug">
					<ProductPage />
				</Route>
				<Route path="/products">
					<ProductsPage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
