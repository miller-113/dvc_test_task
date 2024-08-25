import React, { FC, useState, useEffect } from 'react'
import {
  Box,
  Checkbox,
  FormControl,
  Grid,
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
      <InputLabel>{label}</InputLabel>
      <Select
        multiple
        value={value}
        onChange={(event) => handleSelectChange(event, onChange)}
        renderValue={(selected) => selected.join(', ')}
        IconComponent={IconDropDown}
        disabled={label !== 'Department' && areOtherFiltersDisabled}
      >
        {items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            <Checkbox checked={value.indexOf(item.value) > -1} />
            <ListItemText primary={item.name} />
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

      <Box
        sx={{ width: '100%', display: 'flex', gap: 2, alignItems: 'center' }}
      >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            {renderSelect(
              'Department',
              selectedDepartments,
              setSelectedDepartments,
              departments
            )}
          </Grid>
          <Grid item xs={4}>
            {renderSelect(
              'Status',
              selectedStatuses,
              setSelectedStatuses,
              statuses
            )}
          </Grid>
          <Grid item xs={4}>
            {renderSelect(
              'Country',
              selectedCountries,
              setSelectedCountries,
              countries
            )}
          </Grid>
        </Grid>
        <IconButton onClick={handleDeleteAll} aria-label='delete' size='large'>
          <DeleteOutlineIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default UserFilters
