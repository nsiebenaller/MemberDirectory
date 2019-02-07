import createReducer from '../helpers/createReducer'

const init = {
  members: [],
  selectedTab: "Home",
  searchTerm: ""
}

const general = createReducer(init, {
  ['STORE_PARAM']: (state, action) => {
    return Object.assign({}, state, action.payload)
  },
})

export default general
