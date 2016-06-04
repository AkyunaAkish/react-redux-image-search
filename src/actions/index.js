import axios from 'axios';
const pixaBayApi = 'https://pixabay.com/api/?key=2127791-7f5f0bdaf801a285b56d69550&q='
const apiConfig = '&image_type=photo&safesearch=false&per_page=100'

export function searchPhotos(search_term) {
  const search_photo_request = axios.get(`${pixaBayApi}${search_term}${apiConfig}`);
  return {
    type: 'SEARCH_PHOTOS',
    payload: search_photo_request
  }
}
