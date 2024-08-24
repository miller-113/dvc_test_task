import React, { useState } from 'react'
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Grid,
  Typography,
  Button,
  SelectChangeEvent
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { users, statuses, departments, countries } from '~/dummyData'
import { styles } from '~/components/user-form/UserForm.styles'

interface UserInterface {
  name: string
  status: {
    name: string
    value: string
  }
  department: {
    name: string
    value: string
  }
  country: {
    name: string
    value: string
  }
}

function UserForm() {
  const [user, setUser] = useState<UserInterface | ''>('')

  const iconComponent = (_props: any) => (
    <div style={{ position: 'relative' }}>
      <ExpandMoreIcon {..._props} sx={styles.iconComponentStyles} />
    </div>
  )

  const onUserChange = (e: SelectChangeEvent<string>) => {
    const selectedUserName = e.target.value
    const selectedUser = users.find((_user) => _user.name === selectedUserName)
    if (selectedUser) {
      setUser(selectedUser)
    }
  }

  return (
    <Box sx={styles.boxStyles}>
      <Grid item xs={12} md={6}>
        <InputLabel id='user-label' sx={styles.inputLabelStyles}>
          User
        </InputLabel>
        <FormControl sx={styles.formControlStyles}>
          <Select
            labelId='user-label'
            defaultValue=''
            value={user ? user.name : ''}
            onChange={onUserChange}
            sx={styles.selectStyles}
            IconComponent={iconComponent}
          >
            {users.map((_user) => (
              <MenuItem key={_user.name} value={_user.name}>
                {_user.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Typography variant='h3' sx={styles.userInformationTitle}>
        User Information
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <InputLabel id='full-name-label' sx={styles.inputLabelStyles}>
            Full Name
          </InputLabel>
          <TextField
            InputProps={{
              style: { height: '48px', borderRadius: 0 }
            }}
            variant='outlined'
            fullWidth
            value={user ? user.name : ''}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <InputLabel id='country-label' sx={styles.inputLabelStyles}>
            Country
          </InputLabel>
          <FormControl fullWidth>
            <Select
              labelId='country-label'
              value={user ? user.country.value : ''}
              sx={styles.selectStyles}
              IconComponent={iconComponent}
            >
              {countries.map((_country) => (
                <MenuItem value={_country.value}>{_country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <InputLabel id='department-label' sx={styles.inputLabelStyles}>
            Department
          </InputLabel>
          <FormControl fullWidth>
            <Select
              labelId='department-label'
              value={user ? user.department.value : ''}
              sx={styles.selectStyles}
              IconComponent={iconComponent}
            >
              {departments.map((_department) => (
                <MenuItem value={_department.value}>
                  {_department.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <InputLabel id='status-label' sx={styles.inputLabelStyles}>
            Status
          </InputLabel>
          <FormControl fullWidth>
            <Select
              labelId='status-label'
              value={user ? user.status.value : ''}
              sx={styles.selectStyles}
              IconComponent={iconComponent}
            >
              {statuses.map((_status) => (
                <MenuItem value={_status.value}>{_status.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Box sx={styles.buttonContainerStyles}>
        <Button
          sx={{ ...styles.saveButton, ...styles.undoButton }}
          variant='outlined'
        >
          Undo
        </Button>
        <Button variant='text' sx={styles.saveButton}>
          Save
        </Button>
      </Box>
    </Box>
  )
}

export default UserForm
