import { TOGGLE_PARTNER_MODAL } from './constants';
export const togglePartnerModal = isPartnerModalShow => {
  console.log(isPartnerModalShow)
  return {
    type:TOGGLE_PARTNER_MODAL,
    isPartnerModalShow,
  }
}