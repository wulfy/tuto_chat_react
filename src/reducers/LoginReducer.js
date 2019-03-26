import { LOGIN } from '../actions/loginActions';

const initialState = {
  login:null,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {

    case LOGIN: {
      console.log("logging user");
      const { login } = action.payload;
      return {...state, login};
    }
    default:
      return state;
  }
}