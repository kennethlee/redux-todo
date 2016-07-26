export default function (state = 'ALL', action) {
  switch (action.type) {
    case 'SHOW_ALL':
      return 'ALL';
    case 'FILTER_ACTIVE':
      return 'ACTIVE';
    case 'FILTER_COMPLETED':
      return 'COMPLETED';
    default:
      return state;
  }
}
