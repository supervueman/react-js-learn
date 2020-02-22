import React from 'react';

class LoginButton extends React.Component {
	render() {
		return (
			<button className="btn" onClick={this.props.onClick}>Login</button>
		);
	}
};

export default LoginButton;
