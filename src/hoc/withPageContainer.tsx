import React, { FC } from 'react'
import PageContainer from '~/containers/page-container/PageContainer'

const withPageContainer = (Component: FC) => {
  const WrappedComponent: FC = (props) => {
    return (
      <PageContainer>
        <Component {...props} />
      </PageContainer>
    )
  }

  return WrappedComponent
}

export default withPageContainer
