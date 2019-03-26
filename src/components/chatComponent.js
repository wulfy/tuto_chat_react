import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import MessagesComponent from './messageComponent'
import LoginComponent from './loginComponent'

const chatComponent = props => {

	const { login } = props;

	return(

		<div>
			{login.login ? <MessagesComponent/> : <LoginComponent/> }
		</div>

		)
}


function mapStateToProps(state) {
  return {
    login: state.login,
  };
}


export default connect(mapStateToProps, null)(chatComponent);