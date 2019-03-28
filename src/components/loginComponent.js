import React from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import logo from '../logo.svg';
import { logUser } from '../actions/loginActions';

const loginComponent = props => {

	const onLogin = (e) => {
		const { actions } = props;
		e.preventDefault();
		const userName = e.target.name.value;

		if(userName.length < 3)
		{
			alert("user name must have at least 3 chars");
		}

		actions.logUser(e.target.name.value);
		
	}
	return(
			<div>
			<img src={logo} className="App-logo" alt="logo" />
			<br/>
			Bienvenue, veuillez vous connecter avec un nom d'utilisateur
				<form id="login-form" onSubmit={onLogin}>
			        <input id="name" name="name" type="text"/>
			        <button type="submit" > Utiliser ce nom </button> 
			     </form>
			</div>
		)
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        logUser,
      },
      dispatch,
    ),
  };
}

export default connect(null, mapDispatchToProps)(loginComponent);