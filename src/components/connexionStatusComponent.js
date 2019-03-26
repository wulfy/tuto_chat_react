import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

const connexionStatusComponent = props => {

	const { chat } = props;
	const dotStyle = "dot";
	const color = chat.connected ? "green" : (chat.connected === false ? "red" : "");
	const style = `${dotStyle} ${color}`;
	console.log("connected");
	console.log(chat.connected);
	return(

		<span className={style}>

		</span>

		)
}


function mapStateToProps(state) {
  return {
    chat: state.chat,
  };
}


export default connect(mapStateToProps, null)(connexionStatusComponent);