export const LOGIN = "LOGIN";

export function logUser(login) {
  return {
    type: LOGIN,
    payload: {login}
  }
}