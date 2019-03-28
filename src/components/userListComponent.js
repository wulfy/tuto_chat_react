import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

const userListComponent = props => {

	const { chat } = props;
	console.log(chat);
	return(

		<ul id="userList">
			{chat.usersList.map((user,index)=> <li id="{index}">{user}</li>)}
		</ul>

		)
}


function mapStateToProps(state) {
  return {
    chat: state.chat,
  };
}


export default connect(mapStateToProps, null)(userListComponent);