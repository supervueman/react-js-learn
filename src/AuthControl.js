import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class AuthControl extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isLogin: false
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    this.setState({
      isLogin: true
    });
  }

  logout() {
    this.setState({
      isLogin: false
    });
  }

  render() {
    return (
      <div>{
        !this.state.isLogin ? (
          <div><LoginButton onClick={this.login} /></div>
        ) : (
            <div><LogoutButton onClick={this.logout} /></div>
          )
      }</div>
    );
  }
}

export default AuthControl;
