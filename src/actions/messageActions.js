export const MESSAGE_RECEIVE = 'MESSAGE_RECEIVE';
export const SEND_MESSAGE = 'SEND_MESSAGE';

export function messageReceive(message,errorMessage) {
  return {
    type: MESSAGE_RECEIVE,
    payload: {message,errorMessage}
  }
}

export function sendMessage(message) {
  return {
    type: SEND_MESSAGE,
    payload: {message}
  }
}