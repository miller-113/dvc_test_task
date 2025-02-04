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
import IconDropDown from '~/components/icon-dropdown/IconDropDown'

import useUsers from '~/hooks/use-users'

import { statuses, departments, countries } from '~/dummyData'
import { styles } from '~/components/user-form/UserForm.styles'

import { UserInterface } from '~/types/common'

function UserForm() {
  const [users, setUsers] = useUsers()
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

    setUsers((prevState) => {
      if (user) {
        const userIndex = prevState.findIndex(
          (_user) => _user.name === user.name
        )

        if (userIndex !== -1) {
          const updatedUser = {
            ...prevState[userIndex],
            name: userName || user.name,
            country: countries.find((c) => c.value === country) || user.country,
            department:
              departments.find((d) => d.value === department) ||
              user.department,
            status: statuses.find((s) => s.value === status) || user.status
          }

          const updatedUsers = [
            ...prevState.slice(0, userIndex),
            updatedUser,
            ...prevState.slice(userIndex + 1)
          ]

          return updatedUsers
        }
      }
      return prevState
    })
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
            IconComponent={IconDropDown}
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

      <Grid container rowSpacing={'40px'} columnSpacing={'80px'}>
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
              IconComponent={IconDropDown}
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
              IconComponent={IconDropDown}
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
              IconComponent={IconDropDown}
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
