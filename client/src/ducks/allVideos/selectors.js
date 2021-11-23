import { createSelector } from 'reselect';

const getAllVideos = (state) => state.allVideos;
const getVideosList = createSelector(getAllVideos, allVideos => allVideos.allVideosList);

const allVideosSelectors = {
  getVideosList,
};

export default allVideosSelectors;
