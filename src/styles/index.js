export default {
  'app': {
    textTransform: 'uppercase',
    fontFamily: "'Raleway'",
    height: '100%',
    width: '100%',
    zIndex: '9999',
    position: 'fixed',
    top: '0',
    left: '0',
    backgroundColor: '#CFF09E',
  },
  'mainContainer': {
    margin: '10% auto',
    width: '50%',
  },
  'inputField': {
    margin: '5% 0',
    border: 'none',
    outline: 'none',
    height: '30px',
    lineHeight: '30px',
    borderBottom: '2px solid #3B8686',
    width: '100%',
    color: '#79BD9A',
    backgroundColor: '#CFF09E',
    fontSize: '2em',
    ':focus': {
      borderBottom: '2px solid #A8DBA8',
    }
  },
  'buttons': {
    marginRight: '5%',
    fontSize: '1.5em',
    padding: '0 0 2% 0',
    color: '#79BD9A',
    display: 'inline-block',
    ':hover': {
      cursor: 'pointer',
      color: '#3B8686',
    }
  },
  'active': {
    color: '#0B486B',
    fontWeight: '500',
  },
  'task': {
    fontSize: '1.5em',
    textTransform: 'none',
    color: '#3B8686',
    paddingTop: '5%',
    ':hover': {
      color: '#0B486B',
    },
    '::selection': {
      color: 'white',
    }
  }

};
