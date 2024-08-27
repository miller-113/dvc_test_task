export const styles = {
  dialog: {
    '& .MuiDialog-paper': { width: '720px', maxWidth: '100%' }
  },
  button: {
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
    },
  },
  select: {
    height: '48px',
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 0
    },
    '& .MuiSelect-select': {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    }
  },
  inputLabelStyles: {
    mb: '4px',
    color: 'rgba(94, 98, 107, 1)',
    fontSize: '14px',
    fontFamily: 'Rubik, sans-serif',
    fontWeight: '400'
  },
  title: {
    color: 'black',
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: '32px',
    letterSpacing: '6px',
    fontFamily: 'Karla, sans-serif',
    textAlign: 'center',
    m: '40px 0 60px',
    p: 0
  },
  dialogContent: {
    p: '40px 60px'
  },
  dialogAction: {
    p: '0 60px 40px',
    display: 'flex',
    gap: '12px'
  },
  formContainer: {
    display: 'flex',
    gap: '40px'
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 50%',
    rowGap: '20px'
  }
}
