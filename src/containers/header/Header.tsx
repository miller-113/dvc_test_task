import { useNavigate } from 'react-router-dom'
import { styles } from '~/containers/header/Header.styles'

const Header = () => {
  const navigate = useNavigate()

  return (
    <header style={styles.header}>
      <button style={styles.button} onClick={() => navigate('/edit-user')}>
        Edit User
      </button>
      <button style={styles.button} onClick={() => navigate('/users')}>
        Users
      </button>
    </header>
  )
}

export default Header
