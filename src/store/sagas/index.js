import { all } from "redux-saga/effects";

import watchGetPhotos from "./photos/getPhotos";

export default function* rootSaga() {
  yield all([watchGetPhotos()]);
}