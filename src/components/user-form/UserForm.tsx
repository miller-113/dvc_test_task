import React from 'react'
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Grid,
  Typography,
  Button
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { styles } from '~/components/user-form/UserForm.styles'

function UserForm() {
  const iconComponent = (_props: any) => (
    <div style={{ position: 'relative' }}>
      <ExpandMoreIcon {..._props} sx={styles.iconComponentStyles} />
    </div>
  )
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
            sx={styles.selectStyles}
            IconComponent={iconComponent}
          >
            <MenuItem value='user1'>Oleg Schevchenko</MenuItem>
            <MenuItem value='user2'>User 2</MenuItem>
            <MenuItem value='user3'>User 3</MenuItem>
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
            defaultValue='Oleg Schevchenko'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <InputLabel id='country-label' sx={styles.inputLabelStyles}>
            Country
          </InputLabel>
          <FormControl fullWidth>
            <Select
              labelId='country-label'
              defaultValue='us'
              sx={styles.selectStyles}
              IconComponent={iconComponent}
            >
              <MenuItem value='us'>United States</MenuItem>
              <MenuItem value='ca'>Canada</MenuItem>
              <MenuItem value='uk'>United Kingdom</MenuItem>
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
              defaultValue='Digital Marketing'
              sx={styles.selectStyles}
              IconComponent={iconComponent}
            >
              <MenuItem value='hr'>HR</MenuItem>
              <MenuItem value='engineering'>Engineering</MenuItem>
              <MenuItem value='marketing'>Marketing</MenuItem>
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
              defaultValue='Active'
              sx={styles.selectStyles}
              IconComponent={iconComponent}
            >
              <MenuItem value='active'>Active</MenuItem>
              <MenuItem value='inactive'>Inactive</MenuItem>
              <MenuItem value='on-leave'>On Leave</MenuItem>
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
