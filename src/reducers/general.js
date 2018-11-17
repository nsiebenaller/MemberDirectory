import createReducer from '../helpers/createReducer'
const statuses = ['TODO', 'DOING', 'DONE'];
import initialData from '../../data';

const init = {
  members: []
}


const general = createReducer(init, {
  ['STORE_PARAM']: (state, action) => Object.assign({}, state, action.payload),
})

export default general
