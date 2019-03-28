import io from 'socket.io-client';
import { MESSAGE_RECEIVE, SEND_MESSAGE, DISCONNECT, CONNECT, messageReceive, connected, failConnected, receiveUserList} from '../actions/chatActions';

let socket = null;
const TYPE_MESSAGE = "message";
const TYPE_USER_LIST = "TYPE_USER_LIST";
const TYPE_ERROR = "user_list";
const TYPE_IDENTIFY = "identify";


const socketIO = store => next => action => {
	if(socket != null)
	{
		switch(action.type){
			case SEND_MESSAGE:
						const { message } = action.payload;
						socket.emit(TYPE_MESSAGE,{message});
						break;
			case DISCONNECT :
						socket.close();
						break;
		}
	} else {
		if(action.type === CONNECT)
		{
			console.log("CONNECT");
			socket = io('http://localhost:4000');

			socket.on("connect",(e) => {
				const { userName } = action.payload;
				console.log("CONNECTION");
				socket.emit(TYPE_IDENTIFY,{userName});
				return next(connected());
			});

			socket.on("connect_error",() => {
				console.log("FAILED");
				return next(failConnected());
			});

			socket.on(TYPE_MESSAGE,(data) => {
				console.log("receiving");
				console.log(data);
				return next(messageReceive(data));
			});

			socket.on(TYPE_USER_LIST,(data) => {
				console.log("TYPE_USER_LIST");
				const { userList } = data;
				return next(receiveUserList(userList));
			});
		}
	}

  return next(action);
}

export default socketIO;