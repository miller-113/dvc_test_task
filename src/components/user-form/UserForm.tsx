import React, { useEffect, useState } from 'react'
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
  const [userName, setUserName] = useState('')
  const [country, setCountry] = useState('')
  const [department, setDepartment] = useState('')
  const [status, setStatus] = useState('')
  const [isChanged, setIsChanged] = useState(false)

  const setUsersData = () => {
    if (user) {
      setUserName(user.name)
      setCountry(user.country.value)
      setDepartment(user.department.value)
      setStatus(user.status.value)
    }
  }

  useEffect(setUsersData, [user])

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

  const onSelectChange = (e: SelectChangeEvent<string>) => {
    setIsChanged(true)
    const { name, value } = e.target
    switch (name) {
      case 'country':
        setCountry(value as string)
        break
      case 'department':
        setDepartment(value as string)
        break
      case 'status':
        setStatus(value as string)
        break
      default:
        break
    }
  }
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChanged(true)
    const { name, value } = e.target
    if (name === 'name') {
      setUserName(value as string)
    }
  }
  const handleUndoUsersData = () => {
    setIsChanged(false)
    setUsersData()
  }

const handleSaveUser = () => {
  setIsChanged(false)

  if (user) {
    const userIndex = users.findIndex((_user) => _user.name === user.name)

    if (userIndex !== -1) {
      users[userIndex] = {
        ...users[userIndex],
        name: userName || user.name,
        country: countries.find((c) => c.value === country) || user.country,
        department:
          departments.find((d) => d.value === department) || user.department,
        status: statuses.find((s) => s.value === status) || user.status
      }
    }
  }
}

  return (
    <Box sx={styles.boxStyles}>
      <Box sx={{ color: 'black' }}>
        status {status}
        <br />
        fullname {userName}
        <br />
        department {department}
        <br />
        country {country}
        <br />
      </Box>
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
            name='name'
            onChange={onInputChange}
            InputProps={{
              style: { height: '48px', borderRadius: 0 }
            }}
            variant='outlined'
            fullWidth
            value={userName}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <InputLabel id='country-label' sx={styles.inputLabelStyles}>
            Country
          </InputLabel>
          <FormControl fullWidth>
            <Select
              name='country'
              labelId='country-label'
              value={country}
              sx={styles.selectStyles}
              onChange={onSelectChange}
              IconComponent={iconComponent}
            >
              {countries.map((_country) => (
                <MenuItem key={_country.value} value={_country.value}>
                  {_country.name}
                </MenuItem>
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
              name='department'
              labelId='department-label'
              value={department}
              sx={styles.selectStyles}
              onChange={onSelectChange}
              IconComponent={iconComponent}
            >
              {departments.map((_department) => (
                <MenuItem key={_department.value} value={_department.value}>
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
              name='status'
              labelId='status-label'
              value={status}
              sx={styles.selectStyles}
              IconComponent={iconComponent}
              onChange={onSelectChange}
            >
              {statuses.map((_status) => (
                <MenuItem key={_status.value} value={_status.value}>
                  {_status.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Box sx={styles.buttonContainerStyles}>
        <Button
          onClick={handleUndoUsersData}
          sx={
            !isChanged
              ? styles.displayNone
              : { ...styles.saveButton, ...styles.undoButton }
          }
          variant='outlined'
        >
          Undo
        </Button>
        <Button
          onClick={handleSaveUser}
          disabled={!isChanged}
          variant='text'
          sx={styles.saveButton}
        >
          Save
        </Button>
      </Box>
    </Box>
  )
}

export default UserForm
