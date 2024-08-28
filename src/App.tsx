import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '~/containers/header/Header'
import EditUser from '~/pages/edit-user/EditUser'
import UserPage from '~/pages/user-page/UserPage'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/edit-user' element={<EditUser />} />
        <Route path='/users' element={<UserPage />} />
        <Route path='/' element={<UserPage />} />
      </Routes>
    </Router>
  )
}

export default App
