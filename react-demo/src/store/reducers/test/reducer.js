import initialState from './initialState'
import { TOGGLE_PARTNER_MODAL } from './constants';
const test = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case TOGGLE_PARTNER_MODAL:
      return Object.assign({}, state, {
        isPartnerModalShow: action.isPartnerModalShow
      })
    default:
      return state
  }
}
export default test