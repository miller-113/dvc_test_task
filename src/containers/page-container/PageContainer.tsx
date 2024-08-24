import { Container } from '@mui/material'
import { FC } from 'react'

import { styles } from '~/containers/page-container/PageContainer.styles'

interface PageContainerProps {
  children: JSX.Element
}

const PageContainer: FC<PageContainerProps> = ({children}) => {
  return <Container sx={styles.container}>
    {children}
  </Container>
}
export default PageContainer
