import { combineReducers } from 'redux';
import PhotoSearch from './photo_search_reducer';

const rootReducer = combineReducers({
  photos: PhotoSearch
});

export default rootReducer;
