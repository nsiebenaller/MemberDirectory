export default function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    /* eslint no-prototype-builtins: "off" */
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    }
    return state
  }
}
