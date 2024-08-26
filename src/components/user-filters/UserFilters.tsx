import React, { FC, useState, useEffect } from 'react'
import {
  Box,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  Typography,
  IconButton,
  SelectChangeEvent
} from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

import { styles } from '~/components/user-filters/UserFilters.styles'
import { countries, departments, statuses } from '~/dummyData'
import IconDropDown from '../icon-dropdown/IconDropDown'

type ItemType = {
  name: string
  value: string
}

const UserFilters: FC = () => {
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([])
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([])
  const [selectedCountries, setSelectedCountries] = useState<string[]>([])
  const [areOtherFiltersDisabled, setAreOtherFiltersDisabled] = useState(true)

  const handleSelectChange = (
    event: SelectChangeEvent<string[]>,
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    const { value } = event.target
    setSelected(typeof value === 'string' ? value.split(',') : value)
  }

  useEffect(() => {
    if (selectedDepartments.length >= 3) {
      setAreOtherFiltersDisabled(false)
    } else {
      setAreOtherFiltersDisabled(true)
      setSelectedStatuses([])
      setSelectedCountries([])
    }
  }, [selectedDepartments])

  const handleDeleteAll = () => {
    setSelectedDepartments([])
    setSelectedStatuses([])
    setSelectedCountries([])
    setAreOtherFiltersDisabled(true)
  }

  const renderSelect = (
    label: string,
    value: string[],
    onChange: React.Dispatch<React.SetStateAction<string[]>>,
    items: ItemType[]
  ) => (
    <FormControl fullWidth variant='outlined'>
      <InputLabel
        sx={{
          ...styles.inputLabel,
          '&.MuiInputLabel-shrink': {
            display: value.length > 0 ? 'none' : 'block'
          }
        }}
      >
        {label}
      </InputLabel>
      <Select
        multiple
        value={value}
        onChange={(event) => handleSelectChange(event, onChange)}
        renderValue={(selected) =>
          selected.length > 0 ? `Selected(${selected.length})` : ''
        }
        IconComponent={IconDropDown}
        disabled={label !== 'Department' && areOtherFiltersDisabled}
        sx={styles.select}
        MenuProps={{
          PaperProps: {
            sx: styles.menuPaper
          }
        }}
      >
        {items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            <Checkbox
              checked={value.indexOf(item.value) > -1}
              sx={styles.checkbox}
            />
            <ListItemText primary={item.name} sx={styles.listItemText} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )

  return (
    <Box>
      <Typography variant='body1' sx={styles.title}>
        Please add at least 3 departments to be able to proceed next steps.
      </Typography>
      <Box sx={styles.boxContainer}>
        <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {renderSelect(
            'Department',
            selectedDepartments,
            setSelectedDepartments,
            departments
          )}
          {renderSelect(
            'Status',
            selectedStatuses,
            setSelectedStatuses,
            statuses
          )}
          {renderSelect(
            'Country',
            selectedCountries,
            setSelectedCountries,
            countries
          )}
          <IconButton
            sx={styles.deleteButton}
            onClick={handleDeleteAll}
            aria-label='delete'
            size='large'
          >
            <DeleteOutlineIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

export default UserFilters
