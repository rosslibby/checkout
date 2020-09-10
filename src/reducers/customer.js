const customer = (state, action) => {
  switch(action.type) {
    case 'UPDATE_CUSTOMER':
      return {
        ...state,
        ...action.data
      }
    default:
      return Object.assign({}, state, {...state})
  }
}

export default customer
