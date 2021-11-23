import allVideosTypes from "./types";

export const initialStates = {
  allVideosList:[],
};

const allVideosReducers = (state = initialStates, action) => {
  switch (action.type) {
    case allVideosTypes.GET_VIDEO_LIST_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case allVideosTypes.GET_VIDEO_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        allVideosList: action.payload.data
      };
    case allVideosTypes.GET_VIDEO_LIST_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return { ...state };
  }
};

export default allVideosReducers;
