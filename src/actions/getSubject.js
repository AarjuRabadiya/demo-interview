export const FETCH_SUBJECT_DATA_REQUEST = "FETCH_SUBJECT_DATA_REQUEST";
export const FETCH_SUBJECT_DATA_SUCCESS = "FETCH_SUBJECT_DATA_SUCCESS";
export const FETCH_SUBJECT_DATA_FAILURE = "FETCH_SUBJECT_DATA_FAILURE";

export const fetchSubjectData = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_SUBJECT_DATA_REQUEST });

    try {
      const response = await fetch(
        "https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetSubjectsResponse.json"
      ); // Replace with your API endpoint
      const data = await response.json();
      dispatch({
        type: FETCH_SUBJECT_DATA_SUCCESS,
        payload: data.result[0].subjects,
      });
    } catch (error) {
      dispatch({ type: FETCH_SUBJECT_DATA_FAILURE, payload: error });
    }
  };
};
