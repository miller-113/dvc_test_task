export const styles = {
  boxStyles: {
    margin: 'auto',
    p: 0
  },
  inputLabelStyles: {
    mb: '4px',
    color: 'rgba(94, 98, 107, 1)',
    fontSize: '14px',
    fontFamily: 'Rubik, sans-serif',
    fontWeight: '400'
  },
  formControlStyles: {
    width: 'calc(50% - 40px)'
  },
  selectStyles: {
    minWidth: '250px',
    borderRadius: 'unset',
    height: '48px'
  },
  buttonContainerStyles: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 2,
    mt: '80px'
  },
  userInformationTitle: {
    fontSize: '20px',
    fontWeight: '400',
    fontFamily: 'Rubik, sans-serif',
    color: 'black',
    m: '60px 0 40px',
    letterSpacing: '0.2px'
  },
  saveButton: {
    borderRadius: 0,
    border: '1px solid rgba(196, 196, 196, 1)',
    height: '48px',
    width: '200px',
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
  undoButton: { width: '100px' },
  displayNone: {display: 'none'}
}
