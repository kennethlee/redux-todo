import deepFreeze from 'deep-freeze';

export default function (state = [], action) {
  switch (action.type) {
    case 'ADD_TASK':
      const todo = {
        id: state.length,
        name: action.payload,
        finished: false,
      };

      deepFreeze(state);

      return [todo, ...state];
      break;
    case 'MARK_COMPLETE':
      deepFreeze(state);
      return state.map((task) => {
        if (task === action.payload) {
          return Object.assign({}, task, {finished: !task.finished})
        }
        return task;
      });
    case 'CLEAR_COMPLETED':
      deepFreeze(state)
      return state.filter((task) => !task.finished);
    default:
      return state;
  }
}
