import React, { useState, useMemo } from 'react'
import { Container, Typography, Button, Box } from '@mui/material'
import UserFilters from '~/components/user-filters/UserFilters'
import UsersTable from '~/components/user-table/UserTable'
import AddUserModal from '~/components/add-user-modal/AddUserModal'
import withPageContainer from '~/hoc/withPageContainer'

import { styles } from '~/pages/user-page/UserPage.styles'

import { users as initialUsers } from '~/dummyData'

import { UserInterface } from '~/types/common'

const UserPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([])
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([])
  const [selectedCountries, setSelectedCountries] = useState<string[]>([])
  const [users, setUsers] = useState<UserInterface[]>(initialUsers)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleDeleteUser = (name: string) => {
    // TODO: connect to local storage
    setUsers(users.filter((user) => user.name !== name))
  }

  const filteredUsers: UserInterface[] = useMemo(() => {
    return users.filter(
      (user) =>
        (selectedDepartments.length === 0 ||
          selectedDepartments.includes(user.department.value)) &&
        (selectedStatuses.length === 0 ||
          selectedStatuses.includes(user.status.value)) &&
        (selectedCountries.length === 0 ||
          selectedCountries.includes(user.country.value))
    )
  }, [selectedDepartments, selectedStatuses, selectedCountries, users])

  return (
    <Container sx={styles.container}>
      <Typography variant='h2' sx={styles.title}>
        USERS
      </Typography>
      <Box sx={styles.filterBox}>
        <UserFilters
          selectedDepartments={selectedDepartments}
          setSelectedDepartments={setSelectedDepartments}
          selectedStatuses={selectedStatuses}
          setSelectedStatuses={setSelectedStatuses}
          selectedCountries={selectedCountries}
          setSelectedCountries={setSelectedCountries}
        />
        <Button
          variant='text'
          color='primary'
          onClick={handleOpenModal}
          sx={styles.addButton}
        >
          Add User
        </Button>
      </Box>
      <UsersTable users={filteredUsers} onDelete={handleDeleteUser} />
      <AddUserModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </Container>
  )
}

export default withPageContainer(UserPage)
