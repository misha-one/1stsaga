import { T } from "../../actions/types";

const initialState = {
  data: undefined,
  error: false,
  loading: false,
  success: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case T.GET_PHOTOS:
      return { ...state, loading: true };

    case T.GET_PHOTOS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: false,
        loading: false,
        success: true
      };

    case T.GET_PHOTOS_ERROR:
      return {
        ...state,
        data: action.payload,
        error: true,
        loading: false,
        success: false
      };

    default:
      return state;
  }
};
