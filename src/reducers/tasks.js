import createReducer from '../helpers/createReducer'
const statuses = ['TODO', 'DOING', 'DONE'];
import initialData from '../../data';


const tasks = createReducer(initialData, {
  ['ADD_TASK']: (state, action) => action.payload,
  ['REMOVE_TASK']: (state, action) => action.payload,
  ['CHANGE_TASK_STATUS']: (state, action) => action.payload,
})

export default tasks
