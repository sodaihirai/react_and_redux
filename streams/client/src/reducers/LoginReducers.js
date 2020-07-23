export const loginReducers = (action) => {
  switch (action.type) {
    case "SING_IN":
      return true
    case "SING_OUT":
      return action.payload
    default:
      return false
  }
}
