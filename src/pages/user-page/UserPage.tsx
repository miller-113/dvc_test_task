import { Container, Typography } from '@mui/material'
import UserFilters from '~/components/user-filters/UserFilters'
import UserForm from '~/components/user-form/UserForm'
import withPageContainer from '~/hoc/withPageContainer'

import { styles } from '~/pages/user-page/UserPage.styles'

const UserPage = () => {
  return (
    <Container sx={styles.container}>
      <Typography variant='h2' sx={styles.title}>
        USERS
      </Typography>
      <UserFilters/>
    </Container>
  )
}
export default withPageContainer(UserPage)
