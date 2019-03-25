import { MESSAGE_RECEIVE, SEND_MESSAGE} from '../actions/messageActions';

const initialState = {
  messages:[],
  errorMessages:[]
};

export default function messagesReducer(state = initialState, action) {
  switch (action.type) {

    case MESSAGE_RECEIVE: {
      console.log("receiving message");
      let messages = state.messages;
      let errorMessages = state.errorMessages;

      if('message' in action.payload)
        messages.push(action.payload.message);

      if('errorMessage' in action.payload)
        errorMessages.push(action.payload.errorMessage);

      return {...state, messages, errorMessages};
    }

    case SEND_MESSAGE:
    default:
      return state;
  }
}