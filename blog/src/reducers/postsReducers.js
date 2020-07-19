export const postsReducers = (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload
    default:
      return state;
  }
}

export const usersReducers = (state = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      return action.payload
    default:
      return state;
  }
}
