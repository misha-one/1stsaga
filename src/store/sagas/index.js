import { all } from "redux-saga/effects";

import watchGetPhotos from "./photos/getPhotos";
import watchGetPhoto from "./photos/getPhoto";

export default function* rootSaga() {
  yield all([watchGetPhotos(), watchGetPhoto()]);
}
