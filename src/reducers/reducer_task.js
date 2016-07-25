export default function (state = [], action) {
  switch (action.type) {
    case 'ADD_TASK':
      const todo = {id: state.length, name: action.payload};
      return [todo, ...state];
      break;
    default:
      return state;
  }
}
