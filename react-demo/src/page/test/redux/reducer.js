import initialState from './initialState';
import { testReducer } from './togglePartnerModal';

const reducers = [
    testReducer,
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
  