import {
  FETCH_SUBJECT_DATA_REQUEST,
  FETCH_SUBJECT_DATA_SUCCESS,
  FETCH_SUBJECT_DATA_FAILURE,
} from "../actions/getSubject";

const initialState = {
  subject_data: null,
  subject_loading: false,
  subject_error: null,
};

const subjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUBJECT_DATA_REQUEST:
      return { ...state, subject_loading: true, subject_error: null };
    case FETCH_SUBJECT_DATA_SUCCESS:
      return {
        ...state,
        subject_loading: false,
        subject_data: action.payload,
        subject_error: null,
      };
    case FETCH_SUBJECT_DATA_FAILURE:
      return {
        ...state,
        subject_loading: false,
        subject_error: action.payload,
      };
    default:
      return state;
  }
};

export default subjectReducer;
