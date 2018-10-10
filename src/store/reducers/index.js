import { combineReducers } from "redux";

import photos from "./photos/photos";

import photo from "./photos/photo";

export default combineReducers({
  photos: photos,
  photo: photo
});
