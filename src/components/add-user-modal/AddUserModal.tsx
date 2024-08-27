import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material'

import IconDropDown from '~/components/icon-dropdown/IconDropDown'
import { countries, departments, statuses } from '~/dummyData'

import { styles } from '~/components/add-user-modal/AddUserModal.styles'

import { AddUserModalProps, Item } from '~/types/common'

const AddUserModal: FC<AddUserModalProps> = ({ isOpen, onClose }) => {
  const [selectedCountry, setSelectedCountry] = useState<string>('')
  const [selectedDepartment, setSelectedDepartment] = useState<string>('')
  const [selectedStatus, setSelectedStatus] = useState<string>('')

  const handleSelectChange = (
    event: SelectChangeEvent<string>,
    setSelected: Dispatch<SetStateAction<string>>
  ) => {
    setSelected(event.target.value as string)
  }

  const renderSingleSelect = (
    label: string,
    value: string,
    onChange: Dispatch<SetStateAction<string>>,
    items: Item[]
  ) => (
    <Box>
      <InputLabel sx={styles.inputLabelStyles}>{label}</InputLabel>
      <FormControl fullWidth variant='outlined'>
        <Select
          name={label.toLowerCase()}
          value={value}
          onChange={(event) => handleSelectChange(event, onChange)}
          sx={styles.select}
          IconComponent={IconDropDown}
        >
          {items.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      fullWidth
      maxWidth='sm'
      sx={styles.dialog}
    >
      <DialogTitle sx={styles.title}>ADD USER</DialogTitle>
      <DialogContent sx={styles.dialogContent}>
        <Box sx={styles.formContainer}>
          <Box sx={styles.column}>
            <Box>
              <InputLabel sx={styles.inputLabelStyles}>Full Name</InputLabel>
              <TextField
                name='name'
                InputProps={{
                  style: { height: '48px', borderRadius: 0 }
                }}
                variant='outlined'
                fullWidth
              />
            </Box>
            {renderSingleSelect(
              'Country',
              selectedCountry,
              setSelectedCountry,
              countries
            )}
          </Box>
          <Box sx={styles.column}>
            {renderSingleSelect(
              'Department',
              selectedDepartment,
              setSelectedDepartment,
              departments
            )}
            {renderSingleSelect(
              'Status',
              selectedStatus,
              setSelectedStatus,
              statuses
            )}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={styles.dialogAction}>
        <Button
          sx={{...styles.button, width: '100px'}}
          onClick={onClose}
          variant='text'
          color='primary'
        >
          Cancel
        </Button>
        <Button
          sx={styles.button}
          onClick={onClose}
          variant='text'
          color='primary'
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddUserModal
