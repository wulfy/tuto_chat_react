import React from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { sendMessage } from '../actions/messageActions';

const messageComponent = props => {

	const onSendMessage = (e) => {
		const { actions } = props;
		e.preventDefault();

		actions.sendMessage(e.target.message.value);
	}

	const { messages } = props;
	console.log(messages);
	return(

		<div>
		<form id="message-form" onSubmit={onSendMessage}>
	        <button type="submit" > send message </button> 
	        <input id="message" name="message" type="text" />
	     </form>

	     <div>
	     	{messages.messages.map((message,index)=> (
		     		<span key={"msg-"+index} className="message"> 
		     			{message} 
		     		</span>
		     ))}
		</div>

		</div>

		)
}

messageComponent.propTypes = {
  messages: PropTypes.array.isRequired,
  actions: PropTypes.shape({
    sendMessage: PropTypes.func,
  }).isRequired,
};


function mapStateToProps(state) {
  return {
    messages: state.messages,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        sendMessage,
      },
      dispatch,
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(messageComponent);