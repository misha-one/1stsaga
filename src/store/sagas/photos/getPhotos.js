import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { T } from '../../actions/types';

function* getPhotos() {
    try {
        const url = 
        "https://api.unsplash.com/photos?client_id=072baeb59106e20db44bce2fdfcf2aebf4832a96abe49412ea645492cd01ad2f";
    
        const response = yield call(axios.get, url);

        yield put ({ type: T.GET_PHOTOS_SUCCESS, payload: response.data })
    } catch (error) {
        yield put ({ type:T.GET_PHOTOS_ERROR, payload: error });
    }
}

export default function* watchGetPhotos() {
    yield takeLatest(T.GET_PHOTOS, getPhotos);
}