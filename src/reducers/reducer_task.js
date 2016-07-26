export default function (state = [], action) {
  switch (action.type) {
    case 'ADD_TASK':
      const todo = {
        id: state.length,
        name: action.payload,
        finished: false,
      };

      return [todo, ...state];
      break;
    case 'MARK_COMPLETE':
      return state.map((task) => {
        if (task === action.payload) {
          task.finished ? task.finished = false : task.finished = true;
        }
        return task;
      });    
    default:
      return state;
  }
}
