// actionCreators -> actions (object) -> reducers -> new state

export function addTask(task) {
  return {
    type: 'ADD_TASK',
    payload: task,
  };
}

