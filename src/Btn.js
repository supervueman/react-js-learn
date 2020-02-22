import React from 'react';

class Btn extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isToggleOn: true };
	}

	toggleState = bool => {
		this.setState(() => ({
			isToggleOn: bool
		}));
	}

	render() {
		return (
			<button
				className="btn"
				onClick={() => this.toggleState(!this.state.isToggleOn)}
			>
				{this.state.isToggleOn ? 'Включено' : 'Выключено'}
			</button>
		);
	}
};

export default Btn;
