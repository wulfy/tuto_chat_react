export const MESSAGE_RECEIVE = 'MESSAGE_RECEIVE';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const DISCONNECT = "DISCONNECT";
export const CONNECT = "CONNECT";
export const CONNECTED = "CONNECTED";
export const FAIL_CONNECTED = "FAIL_CONNECTED";
export const TYPE_USER_LIST = "TYPE_USER_LIST";

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

export function chatConnect(login){
  return {
    type: CONNECT,
    payload: {userName:login}
  }
}

export function connected(){
  return {
    type: CONNECTED,
    payload: null
  }
}

export function failConnected(){
  return {
    type: FAIL_CONNECTED,
    payload: null
  }
}

export function disconnect(){
  return {
    type: DISCONNECT,
    payload: null
  }
}

export function receiveUserList(usersList){
  return {
    type: TYPE_USER_LIST,
    payload: {usersList}
  }
}

