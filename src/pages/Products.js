import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Components
import Card from '../components/Card';

function ProductsPage(props) {
	useEffect(() => {
		props.onFetchProducts();
	}, []);

	return (
		<main>
			<section className="section">
				<div className="container">
					<h1>Products page</h1>
					{props.products.map(el => <Card item={el} key={el.id}></Card>)}
				</div>
			</section>
		</main >
	);
}

export default connect(state => ({
	products: state.products
}), dispatch => ({
	onFetchProducts: () => dispatch({
		type: 'SHOW_ALL_PRODUCTS'
	}),
}))(ProductsPage);
