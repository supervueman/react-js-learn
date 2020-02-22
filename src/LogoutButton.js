import React from 'react';

class LogoutButton extends React.Component {
	render() {
		return (
			<button className="btn" onClick={this.props.onClick}>Logout</button>
		);
	}
};

export default LogoutButton;
