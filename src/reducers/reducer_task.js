export default function (state = [], action) {
  switch (action.type) {
    case 'ADD_TASK':
      return [action.payload, ...state];
      break;
    default:
      return state;
  }
}

