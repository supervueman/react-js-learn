import React from 'react';

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: 'Qwer', content: 'Web developer' };
	}

	componentDidMount() {
		this.setState({ name: 'Rinat' });
	}

	render() {
		return (
			<div className="card" >
				<span>{this.state.name}</span>
				<h3>{this.props.title}</h3>
				<p>{this.props.content}</p>
			</div>
		);
	}
};

export default Card;
