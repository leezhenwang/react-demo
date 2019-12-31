import { TOGGLE_PARTNER_MODAL } from './constants';

export function togglePartnerModal(isPartnerModalShow) {
  return {
    type: TOGGLE_PARTNER_MODAL,
    isPartnerModalShow,
  };
}

export function testReducer(state, action) {
  switch (action.type) {
    case TOGGLE_PARTNER_MODAL:
      return {
        ...state,
        isPartnerModalShow: action.isPartnerModalShow
      };

    default:
      return state;
  }
}