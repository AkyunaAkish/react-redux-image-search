export default function(state = 'initial', action) {
  switch (action.type) {
    case 'SEARCH_PHOTOS':
    console.log('payload', action.payload.data);
    return action.payload.data.hits;
    break;
    default:
    return state;
  }
}
