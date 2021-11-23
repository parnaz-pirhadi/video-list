import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  allVideosReducers,
} from '../../ducks';
const allVideosPersistConfig = {
  key: 'allVideos',
  storage,
};

const rootReducers = {
  allVideos: persistReducer(allVideosPersistConfig, allVideosReducers),
};

export default rootReducers;
