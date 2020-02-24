import React from 'react';
import { useParams } from 'react-router-dom';

// Components
import Card from '../components/Card';

function ProductPage() {
	const products = [{
		id: 4,
		slug: 'book_4',
		title: 'Book 4'
	}, {
		id: 5,
		slug: 'book_5',
		title: 'Book 5'
	}, {
		id: 6,
		slug: 'book_6',
		title: 'Book 6'
	}];

	let { slug } = useParams();
	return (
		<main>
			<section className="section">
				<div className="container">
					<h1>Product page {slug}</h1>
				</div>
			</section>

			<section className="section">
				<div className="container">
					<h1>Other Products</h1>
					{products.map(el => <Card item={el} key={el.id}></Card>)}
				</div>
			</section>
		</main>
	);
}

export default ProductPage;
