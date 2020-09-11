const stripe = (state, action) => {
  switch(action.type) {
    case 'CHARGE_STRIPE_CUSTOMER':
      return {
        ...state,
        charge: action.charge
      }
    case 'CREATE_STRIPE_CUSTOMER':
      return {
        ...state,
        customer: action.customer
      }
    default:
      return Object.assign({}, state, {
        ...state,
        client_id: 'pk_test_T0ULtPYHaPA4ipD3CBCng3MA00AImGD2g4',
        client_secret: 'sk_test_36KRre38DYVT6RG7K5ZeeHqr00okSWu02T'
      })
  }
}

export default stripe
