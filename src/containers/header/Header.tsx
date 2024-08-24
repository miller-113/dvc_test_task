import { styles } from '~/containers/header/Header.styles'

const Header = () => {
  return (
    <header style={styles.header}>
      <button style={styles.button}>Edit User</button>
      <button style={styles.button}>Users</button>
    </header>
  )
}
export default Header
