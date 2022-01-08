import { userService } from "./../services/user.service"
import { userConstants } from "./../constants/user.constants";

export const userActions = {
    getTransactions,
  };

  function getTransactions(){
      return (dispatch) => {
          dispatch(request());
          userService.getTransactions().then((transactions)=>{
            dispatch(success(transactions));

          },
          (error) => {
            dispatch(failure(error.toString()));

          })
      };
      function request(user) {
        return { type: userConstants.GETALL_REQUEST, user };
      }
      function success(user) {
        return { type: userConstants.GETALL_SUCCESS, user };
      }
      function failure(error) {
        return { type: userConstants.GETALL_FAILURE, error };
      }

  }