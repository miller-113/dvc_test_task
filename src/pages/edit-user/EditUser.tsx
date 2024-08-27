import { Container, Typography } from '@mui/material'
import UserForm from '~/components/user-form/UserForm'
import withPageContainer from '~/hoc/withPageContainer'

import { styles } from '~/pages/edit-user/EditUser.styles'

const EditUser = () => {
  return (
    <Container sx={styles.container}>
      <Typography variant='h2' sx={styles.title}>
        EDIT USER
      </Typography>
      <UserForm />
    </Container>
  )
}

export default withPageContainer(EditUser)
