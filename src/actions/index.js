export const addTask = ({ text, executor}) => {
  return (dispatch, getState) => {
    const state = getState()
    const arr = state.tasks.concat({
      "id": state.tasks.length,
      "executor": executor,
      "text": text,
      "status": "TODO"},
    )
    dispatch({
        type: 'ADD_TASK',
        payload: arr
    })
  }
}

export const removeTask = (id) => {
  return (dispatch, getState) => {
    const state = getState()
    const arr = state.tasks.filter(x => x.id !== id)
    dispatch({
        type: 'REMOVE_TASK',
        payload: arr
    })
  }
};

export const changeTaskStatus = (id) => {
  return (dispatch, getState) => {
    const state = getState()
    const statuses = ['TODO', 'DOING', 'DONE']
    const { tasks } = state

    const arr = tasks.filter(x => x.id !== id)
    const task = (tasks.filter(x => x.id === id).length > 0) ? (tasks.filter(x => x.id === id)[0]) : (false)
    if(task) {
      const index = statuses.indexOf(task.status)
      if(index === 2) {
        task.status = statuses[0]
      }
      else {
        task.status = statuses[index + 1]
      }
      arr.push(task)

      dispatch({
          type: 'CHANGE_TASK_STATUS',
          payload: arr
      })
    }
  }
};
