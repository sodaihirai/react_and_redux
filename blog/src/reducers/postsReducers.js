export const postsReducers = (posts = [], action) => {
  if (action.type === "FETCH_POSTS") {
    return action.payload
  }

  return posts
}
