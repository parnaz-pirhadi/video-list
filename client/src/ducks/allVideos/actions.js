import { createAction } from '../../helpers';
import allVideosTypes from './types';

const allVideosActions = {
  getVideoList: createAction(allVideosTypes.GET_VIDEO_LIST_REQUEST),
  getVideoListSuccess: createAction(allVideosTypes.GET_VIDEO_LIST_SUCCESS),
  getVideoListFailure: createAction(allVideosTypes.GET_VIDEO_LIST_FAILURE),

};

export default allVideosActions;
