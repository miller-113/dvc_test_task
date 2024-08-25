import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { styles } from '~/components/icon-dropdown/IconDropDown.styles'

const IconDropDown = (props: any) => {
  return (
    <div style={{ position: 'relative' }}>
      <ExpandMoreIcon {...props} sx={styles.iconComponentStyles} />
    </div>
  )
}
export default IconDropDown
