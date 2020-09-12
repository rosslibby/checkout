import { SET_SHIPPING } from 'constants/cart'

const setShipping = (name, rate) => ({
  type: SET_SHIPPING,
  name,
  rate
})

export default setShipping
