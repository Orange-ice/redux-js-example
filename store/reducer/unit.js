export const unitReducer = (state='m', action) => {
  switch (action.type) {
    case 'SET_UNIT':
      return action.unit
    default:
      return state
  }
}
