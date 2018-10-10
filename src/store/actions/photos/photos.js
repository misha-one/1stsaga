import { T } from "../types";

export const aGetPhotos = () => ({ type: T.GET_PHOTOS });
export const aGetPhoto = id => ({ type: T.GET_PHOTO, id });
// тут так!!!
