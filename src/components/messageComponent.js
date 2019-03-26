import React from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { sendMessage, chatConnect } from '../actions/chatActions';
import UserList from './userListComponent';
const messageComponent = props => {

	const onSendMessage = (e) => {
		const { actions } = props;
		e.preventDefault();

		actions.sendMessage(e.target.message.value);
	}

	const handleConnect = (e) => {
		const { actions, login } = props;
		e.preventDefault();

		actions.chatConnect(login.login);
	}

	const { chat, login } = props;
	console.log(chat);
	return(

		<div>
		{login.login}
		<UserList/>
		{chat.connected ? 
							<form id="message-form" onSubmit={onSendMessage}>
						        <input id="message" name="message" type="text" />
						        <button type="submit" > send message </button> 
						     </form>
						:    
							<button onClick={handleConnect}> Se connecter </button>
		}

	     <div>
	     	{chat.messages.map((message,index)=> (
		     		<span key={"msg-"+index} className="message"> 
		     			{message} 
		     		</span>
		     ))}
		</div>

		</div>

		)
}

messageComponent.propTypes = {
  chat: PropTypes.object.isRequired,
  login: PropTypes.object.isRequired,
  actions: PropTypes.shape({
    sendMessage: PropTypes.func,
  }).isRequired,
};


function mapStateToProps(state) {
  return {
    chat: state.chat,
    login: state.login,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        sendMessage,
        chatConnect,
      },
      dispatch,
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(messageComponent);