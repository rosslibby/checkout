const cart = (state, action) => {
  switch(action.type) {
    case 'SET_SHIPPING':
      return {
        ...state,
        shipping: {
          ...state.shipping,
          name: action.name,
          rate: action.rate
        }
      }
    default:
      return Object.assign({}, state, {
        ...state,
        product: {
          cost: 0
        },
        shipping: {
          name: '',
          rate: 0
        }
      })
  }
}

export default cart
