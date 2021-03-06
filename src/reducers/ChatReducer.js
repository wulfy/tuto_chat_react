import { MESSAGE_RECEIVE, CONNECTED, FAIL_CONNECTED, TYPE_USER_LIST} from '../actions/chatActions';

const initialState = {
  messages:[],
  errorMessages:[],
  usersList: [],
  connected: null
};

export default function messagesReducer(state = initialState, action) {

  let connected = null;
  switch (action.type) {

    case MESSAGE_RECEIVE: {
      console.log("receiving message");
      let messages = state.messages;
      let errorMessages = state.errorMessages;

      if('message' in action.payload)
      {
        const {message, userName} = action.payload;
        messages.push({text:message,user:userName});
      }

      if('errorMessage' in action.payload && action.payload.errorMessage)
      {
        const {errorMessage} = action.payload;
        errorMessages.push(errorMessage);
      }

      return {...state, messages, errorMessages};
    }

    case CONNECTED:
        connected = true;
        return {...state, connected };

    case FAIL_CONNECTED:
        connected = false;
        return {...state, connected };

    case TYPE_USER_LIST:
        const {usersList} = action.payload; 
        return {...state, usersList };
    default:
      return state;
  }
}