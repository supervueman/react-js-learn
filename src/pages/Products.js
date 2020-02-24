import React from 'react';
import Card from '../components/Card';

function ProductsPage() {
	const products = [{
		id: 1,
		slug: 'book_1',
		title: 'Book 1'
	}, {
		id: 2,
		slug: 'book_2',
		title: 'Book 2'
	}, {
		id: 3,
		slug: 'book_3',
		title: 'Book 3'
	}];

	return (
		<main>
			<section className="section">
				<div className="container">
					<h1>Products page</h1>
					{products.map(el => <Card item={el} key={el.id}></Card>)}
				</div>
			</section>
		</main >
	);
}

export default ProductsPage;
