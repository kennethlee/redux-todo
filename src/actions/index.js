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

export function filterActive() {
  return {
    type: 'FILTER_ACTIVE',
  }
}

export function showAll() {
  return {
    type: 'SHOW_ALL'
  }
}

export function filterCompleted() {
  return {
    type: "FILTER_COMPLETED"
  }
}
