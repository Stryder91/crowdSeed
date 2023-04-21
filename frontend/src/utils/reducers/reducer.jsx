export function myState(state, action) {
  switch (action.type) {
    case "SET_ACCOUNT":
      return { ...state, account: action.payload };
    case "SET_NUMBER_HOUSING": 
      return { ...state, housing_number: action.payload }
    case "SET_AMOUNT":
      return { ...state, amountToBuy: action.payload }
    default:
      return { ...state };
  }
}