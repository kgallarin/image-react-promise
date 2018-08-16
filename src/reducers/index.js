import { combineReducers } from "redux";
import {
  RECEIVE_DATA_PENDING,
  RECEIVE_DATA_FULFILLED,
  RECEIVE_DATA_REJECTED
} from "../actions/index";

const initState = {
  isLoading: false,
  isRejected: false,
  resultData: {},
  err: ""
};

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case RECEIVE_DATA_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case RECEIVE_DATA_FULFILLED:
      return {
        ...state,
        isLoading: false,
        resultData: action.payload
      };
    case RECEIVE_DATA_REJECTED:
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        err: action.payload
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  dataReducer
});

export default rootReducer;
