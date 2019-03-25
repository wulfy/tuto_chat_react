import { messageReceive } from '../actions/messageActions';

const echoChat = store => next => action => {
	console.log("echo!")
  let result = next(messageReceive(action.payload.message))
  return result
}

export default echoChat;