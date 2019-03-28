import * as actions from '../actions/chatActions'
import * as reducers from '../reducers/index'

const message = 'Hello'

describe('actions', () => {
  it('should create an send message action', () => {
    
    const expectedAction = {
      "payload": {
      	message
      },
      type: actions.SEND_MESSAGE
    }
    expect(actions.sendMessage(message)).toEqual(expectedAction)
  })
})

const initialState = {
  messages:[],
  errorMessages:[],
  usersList: [],
  connected: null
};


describe('chat reducer', () => {
  it('should return the initial state', () => {
    expect(reducers.chat(undefined, {})).toEqual(initialState)
  })

  it('should handle MESSAGE_RECEIVE', () => {
	    expect(
	      reducers.chat(initialState, actions.messageReceive({message:"hello",userName:"toto"}))
	      	).toEqual(
		      {
				  messages:[{text:"hello",user:"toto"}],
				  errorMessages:[],
				  usersList: [],
				  connected: null
		      }
		    )

	    expect(
	      reducers.chat({...initialState,messages:[{text:"bar",user:"foo"}]}, actions.messageReceive({message:"hello",userName:"toto"}))
	      ).toEqual(
		      {
				  messages:[{text:"bar",user:"foo"},{text:"hello",user:"toto"}],
				  errorMessages:[],
				  usersList: [],
				  connected: null
		      }
		    )
	})
})