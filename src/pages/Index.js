import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

//Components
import Card from '../components/Card';

function IndexPage(props) {
	useEffect(() => {
		props.onFetchProducts();
	}, []);

	const [productTitle, setProductTitle] = useState('');

	function addProduct(e) {
		e.preventDefault();
		props.onAddProduct({ id: 8, slug: `book_8`, title: productTitle });
		setProductTitle('');
	}

	return (
		<main>
			<section className="section">
				<div className="container">
					<h3>{productTitle}</h3>
					<form onSubmit={e => addProduct(e)}>
						<input type="text" name="title" value={productTitle} onChange={e => setProductTitle(e.target.value)} />
						<button>Add product</button>
					</form>
				</div>
			</section>

			<section className="section">
				<div className="container">
					<h1>Products</h1>
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
	onAddProduct: product => dispatch({
		type: 'ADD_PRODUCT',
		payload: product
	})
}))(IndexPage);
