import { userConstants } from '../constants';

export function users(state = {}, action) {
    switch (action.type) {
        case userConstants.GETALL_REQUEST:
          return { 
          };
        case userConstants.GETALL_SUCCESS:
          return{
            
          };
        case userConstants.GETALL_FAILURE:
          return {
          };
        default:
          return state
      }
}