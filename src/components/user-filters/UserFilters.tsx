import {
  Box,
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography
} from '@mui/material'

import { styles } from '~/components/user-filters/UserFilters.styles'
import { countries, departments, statuses } from '~/dummyData'
import IconDropDown from '../icon-dropdown/IconDropDown'
import { FC, useState } from 'react'

interface Item {
  value: string
  name: string
}

const UserFilters = () => {
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([])
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([])
  const [selectedCountries, setSelectedCountries] = useState<string[]>([])

  const handleSelectChange = (
    event: SelectChangeEvent<string[]>,
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    const { value } = event.target
    setSelected(typeof value === 'string' ? value.split(',') : value)
  }
  
  const renderSelect = (
    label: string,
    value: string[],
    onChange: React.Dispatch<React.SetStateAction<string[]>>,
    items: Item[]
  ) => (
    <FormControl fullWidth variant='outlined'>
      <InputLabel>{label}</InputLabel>
      <Select
        multiple
        value={value}
        onChange={(event) => handleSelectChange(event, onChange)}
        renderValue={(selected) => selected.join(', ')}
        IconComponent={IconDropDown}
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

      <Box sx={{ width: '100%', display: 'flex', gap: 2 }}>
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
      </Box>
    </Box>
  )
}
export default UserFilters
