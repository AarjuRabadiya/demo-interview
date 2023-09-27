import {
  FETCH_HOBBIES_DATA_REQUEST,
  FETCH_HOBBIES_DATA_SUCCESS,
  FETCH_HOBBIES_DATA_FAILURE,
} from "../actions/getHobbies";

const initialState = {
  hobbies_data: null,
  hobbies_loading: false,
  hobbies_error: null,
};

const hobbiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOBBIES_DATA_REQUEST:
      return { ...state, hobbies_loading: true, hobbies_error: null };
    case FETCH_HOBBIES_DATA_SUCCESS:
      return {
        ...state,
        hobbies_loading: false,
        hobbies_data: action.payload,
        hobbies_error: null,
      };
    case FETCH_HOBBIES_DATA_FAILURE:
      return {
        ...state,
        hobbies_loading: false,
        hobbies_error: action.payload,
      };
    default:
      return state;
  }
};

export default hobbiesReducer;
