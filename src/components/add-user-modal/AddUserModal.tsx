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

import { AddUserModalProps, Item, UserInterface } from '~/types/common'

const AddUserModal: FC<AddUserModalProps> = ({
  isOpen,
  onClose,
  users,
  onSaveUser
}) => {
  const [selectedCountry, setSelectedCountry] = useState<Item | string>('')
  const [selectedDepartment, setSelectedDepartment] = useState<Item | string>(
    ''
  )
  const [selectedStatus, setSelectedStatus] = useState<Item | string>('')
  const [name, setName] = useState<string>('')

  const handleSelectChange = (
    event: SelectChangeEvent<string>,
    setSelected: Dispatch<SetStateAction<Item | string>>,
    items: Item[]
  ) => {
    const selectedValue = event.target.value
    const selectedItem = items.find((item) => item.value === selectedValue)
    if (selectedItem) {
      setSelected(selectedItem)
    } else {
      setSelected(selectedValue)
    }
  }


  const handleAddUser = () => {
    const newUser: UserInterface = {
      name,
      country:
        typeof selectedCountry === 'string'
          ? { value: '', name: '' }
          : selectedCountry,
      department:
        typeof selectedDepartment === 'string'
          ? { value: '', name: '' }
          : selectedDepartment,
      status:
        typeof selectedStatus === 'string'
          ? { value: '', name: '' }
          : selectedStatus
    }
    onSaveUser([...users, newUser])
    setSelectedCountry('')
    setSelectedDepartment('')
    setSelectedStatus('')
    setName('')
    onClose()
  }

  const renderSingleSelect = (
    label: string,
    value: Item | string,
    onChange: Dispatch<SetStateAction<Item | string>>,
    items: Item[]
  ) => (
    <Box>
      <InputLabel sx={styles.inputLabelStyles}>{label}</InputLabel>
      <FormControl fullWidth variant='outlined'>
        <Select
          name={label.toLowerCase()}
          value={typeof value === 'string' ? '' : value.value}
          onChange={(event) => handleSelectChange(event, onChange, items)}
          sx={styles.select}
          IconComponent={IconDropDown}
        >
          {items.map((item) => (
            <MenuItem
              key={item.value}
              value={item.value}
              data-item={JSON.stringify(item)}
            >
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
          sx={{ ...styles.button, width: '100px' }}
          onClick={onClose}
          variant='text'
          color='primary'
        >
          Cancel
        </Button>
        <Button
          sx={styles.button}
          onClick={handleAddUser}
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
