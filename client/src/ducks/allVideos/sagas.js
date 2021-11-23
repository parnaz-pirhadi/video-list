import { put, takeLatest } from 'redux-saga/effects';

import axios from "axios";
import {authHeader} from "../../config/sagas/auth-header";
import allVideosActions from "./actions";
import allVideosTypes from "./types";

function* fetchAllVideos() {
    try {
        const user = yield axios.get('/api/videos/getAll',{ headers: authHeader() }); //If the Effect is a CALL then it'll call the given function.
        yield put(allVideosActions.getVideoListSuccess(user.data)); //If the Effect type is a PUT then it will dispatch an action to the Store
    } catch (e) {
        yield put(allVideosActions.getVideoListFailure(e.message));
    }
}

const allVideosSagas = [
    takeLatest(allVideosTypes.GET_VIDEO_LIST_REQUEST, fetchAllVideos),
];

export default allVideosSagas;
