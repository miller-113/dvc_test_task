export const styles = {
  title: {
    margin: '60px auto 40px',
    fontSize: '24px',
    letterSpacing: '6px',
    lineHeight: '32px',
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Karla, sans-serif'
  },
  container: {
    p: 0,
    '@media (min-width: 600px)': {
      p: '0'
    }
  },
  addButton: {
    marginLeft: 'auto',
    alignSelf: 'flex-end',

    height: '48px',
    width: '150px',
    borderRadius: 0,
    border: '1px solid rgba(196, 196, 196, 1)',
    color: 'black',
    fontWeight: 300,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.2px',
    '&:hover': {
      backgroundColor: '#ffffff',
      boxShadow: 'none',
      border: '1px solid rgba(100, 100, 100, 1)',
      outline: 0
    },
    '&:active': {
      backgroundColor: 'grey',
      border: '1px solid rgba(100, 100, 100, 1)',
      outline: 0
    },
    '&:focus': {
      border: '1px solid rgba(100, 100, 100, 1)',
      outline: 0
    }
  },
  filterBox: { display: 'flex' }
}
