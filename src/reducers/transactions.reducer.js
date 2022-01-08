import { userConstants } from "../constants/user.constants";

export function getTransactions(state = {}, action) {
  console.log("reducer", action);
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {};
    case userConstants.GETALL_SUCCESS:
      return {
        transactions: action.transactions,
      };
    case userConstants.GETALL_FAILURE:
      return {};
    default:
      return state;
  }
}
