import { TOGGLE_FIVEGCHANNEL_MODAL } from './constants';

export function toggleFiveGChannelModal(isFiveGChannelModalShow) {
  return {
    type: TOGGLE_FIVEGCHANNEL_MODAL,
    isFiveGChannelModalShow,
  };
}

export function fiveGChannelReducer(state, action) {
  switch (action.type) {
    case TOGGLE_FIVEGCHANNEL_MODAL:
      return {
        ...state,
        isFiveGChannelModalShow: action.isFiveGChannelModalShow
      };

    default:
      return state;
  }
}