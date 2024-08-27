import React, { useState } from 'react'
import { Container, Typography, Button, Box } from '@mui/material'
import UserFilters from '~/components/user-filters/UserFilters'
import UsersTable from '~/components/user-table/UserTable'
import AddUserModal from '~/components/add-user-modal/AddUserModal'
import withPageContainer from '~/hoc/withPageContainer'

import { styles } from '~/pages/user-page/UserPage.styles'

const UserPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <Container sx={styles.container}>
      <Typography variant='h2' sx={styles.title}>
        USERS
      </Typography>
      <Box sx={styles.filterBox}>
        <UserFilters />
        <Button
          variant='text'
          color='primary'
          onClick={handleOpenModal}
          sx={styles.addButton}
        >
          Add User
        </Button>
      </Box>
      <UsersTable />
      <AddUserModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </Container>
  )
}

export default withPageContainer(UserPage)
