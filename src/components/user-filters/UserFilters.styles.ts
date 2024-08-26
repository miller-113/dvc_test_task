export const styles = {
  title: {
    color: 'rgba(27, 36, 56, 1)',
    fontFamily: 'Rubik, sans-serif',
    fontWeight: '300',
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.2px',
    mb: '12px'
  },
  inputLabel: {
    transform: 'translate(14px, 16px) scale(1)',
    color: 'rgba(194, 194, 194, 1)',
    '&.Mui-focused': {
      color: 'rgba(194, 194, 194, 1)'
    },
    '&.MuiInputLabel-shrink': {
      display: 'block'
    }
  },
  select: {
    height: '48px',
    width: '220px',
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
  menuPaper: {
    width: '220px',
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 0,
    marginTop: 0,
    boxShadow: 'none'
  },
  checkbox: {
    borderRadius: 0,
    color: 'black',
    '&.Mui-checked': {
      borderRadius: 0,

      color: 'black'
    }
  },
  listItemText: {
    '& .MuiTypography-root': {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 300,
      fontFamily: 'Rubik',
      letterSpacing: '0.2px',
      color: 'rgba(94, 98, 107, 1)'
    }
  },
  deleteButton: {
    border: '1px solid',
    borderRadius: 0,
    marginLeft: '12px',
  },
  boxContainer: {
    width: '100%',
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }
}
