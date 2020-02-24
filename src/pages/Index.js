import React, { useState } from 'react';

//Components
import Card from '../components/Card';

function IndexPage() {

	const [products, setProducts] = useState([{
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
	}]);

	const [productTitle, setProductTitle] = useState('');


	function addProduct(e) {
		e.preventDefault();
		const lastId = products[products.length - 1].id;
		const newId = lastId + 1;
		setProducts([...products, { id: newId, slug: `book_${newId}`, title: productTitle }]);
	}

	return (
		<main>
			<section className="section">
				<div className="container">
					<h3>{productTitle}</h3>
					<form onSubmit={e => addProduct(e)}>
						<input type="text" name="title" onChange={e => setProductTitle(e.target.value)} />
						<button>Add product</button>
					</form>
				</div>
			</section>

			<section className="section">
				<div className="container">
					<h1>Products page</h1>
					{products.map(el => <Card item={el} key={el.id}></Card>)}
				</div>
			</section>
		</main >
	);
}

export default IndexPage;
