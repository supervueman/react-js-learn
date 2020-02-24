import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
	return (
		<Link className="card" to={`/products/${props.item.slug}`}>
			<h3>{props.item.title}</h3>
		</Link>
	);
}

export default Card;
