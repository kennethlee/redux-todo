// actionCreators -> actions (object) -> reducers -> new state

export function addTask(task) {
  return {
    type: 'ADD_TASK',
    payload: task,
  };
}

export function markComplete(task) {
  return {
    type: 'MARK_COMPLETE',
    payload: task,
  }
}
