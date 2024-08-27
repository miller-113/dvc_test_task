import React, { FC } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box
} from '@mui/material'

type AddUserModalProps = {
  isOpen: boolean
  onClose: () => void
}

const AddUserModal: FC<AddUserModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth='sm'>
      <DialogTitle>Add User</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <TextField label='Full Name' variant='outlined' fullWidth />
          <TextField label='Department' variant='outlined' fullWidth />
          <TextField label='Country' variant='outlined' fullWidth />
          <TextField label='Status' variant='outlined' fullWidth />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color='secondary'>
          Cancel
        </Button>
        <Button onClick={onClose} variant='contained' color='primary'>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddUserModal
