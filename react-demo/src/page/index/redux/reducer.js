import initialState from './initialState';
import { fiveGChannelReducer } from './toggleFiveGChannelModal';

const reducers = [
    fiveGChannelReducer,
];

export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
      // Handle cross-topic actions here
      default:
        newState = state;
        break;
    }
    // console.log('reduce', reducers.reduce((s, r) => r(s, action), newState))
    return reducers.reduce((s, r) => r(s, action), newState);
}
  