import { userService } from "./../services/user.service";
import { userConstants } from "./../constants/user.constants";

export const userActions = {
  getTransactions,
};

function getTransactions() {
  return (dispatch) => {
    dispatch(request());
    userService.getTransactions().then(
      (transactions) => {
        dispatch(success(transactions));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };
  function request(transactions) {
    return { type: userConstants.GETALL_REQUEST, transactions };
  }
  function success(transactions) {
    return { type: userConstants.GETALL_SUCCESS, transactions };
  }
  function failure(error) {
    return { type: userConstants.GETALL_FAILURE, error };
  }
}
