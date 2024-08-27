import React, { FC, useEffect, Dispatch, SetStateAction, useState } from 'react'
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
import IconDropDown from '~/components/icon-dropdown/IconDropDown'

import { Item } from '~/types/common'

interface UserFiltersProps {
  selectedDepartments: string[]
  setSelectedDepartments: Dispatch<SetStateAction<string[]>>
  selectedStatuses: string[]
  setSelectedStatuses: Dispatch<SetStateAction<string[]>>
  selectedCountries: string[]
  setSelectedCountries: Dispatch<SetStateAction<string[]>>
}

const UserFilters: FC<UserFiltersProps> = ({
  selectedDepartments,
  setSelectedDepartments,
  selectedStatuses,
  setSelectedStatuses,
  selectedCountries,
  setSelectedCountries
}) => {
  const [areOtherFiltersDisabled, setAreOtherFiltersDisabled] = useState(true)

  const handleSelectChange = (
    event: SelectChangeEvent<string[]>,
    setSelected: Dispatch<SetStateAction<string[]>>
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

  const sortItems = (items: Item[], selectedValues: string[]): Item[] => {
    const selectedItems = items.filter((item) =>
      selectedValues.includes(item.value)
    )
    const unselectedItems = items.filter(
      (item) => !selectedValues.includes(item.value)
    )
    return [...selectedItems, ...unselectedItems]
  }

  const renderSelect = (
    label: string,
    value: string[],
    onChange: Dispatch<SetStateAction<string[]>>,
    items: Item[]
  ) => {
    const sortedItems = sortItems(items, value)

    return (
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
          {sortedItems.map((item) => (
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
  }

  return (
    <Box sx={styles.container}>
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
