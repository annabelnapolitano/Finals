import fetchAPI from './fetchAPI';

export function updateTimes(state, action) {
  if (action.type === 'setTimes') {
    // Use the date from the action to get available times
    return fetchAPI(action.date);
  }
  // For other action types, return current state unchanged
  return state;
}