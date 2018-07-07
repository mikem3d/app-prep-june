import * as Actions from '../actions/activity';

export default function reducer(state = false, action) {
  switch(action.type) {
    case Actions.UPDATE_ACTIVITY: 
      return action.value;
    default:
      return state;
  }
}