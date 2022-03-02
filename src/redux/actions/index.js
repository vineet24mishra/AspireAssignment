import {SET_CREDIT_LIMIT} from '../types'
export const setCardLimit = cardLimit => {
    console.log('cardLimit action ===>', cardLimit);
    return {
      type: SET_CREDIT_LIMIT,
      payload: cardLimit,
    };
  };