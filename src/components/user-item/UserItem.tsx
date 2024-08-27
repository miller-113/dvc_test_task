import React, { FC } from 'react'
import { TableCell, IconButton } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

import { styles } from '~/components/user-item/UserItem.styles'

import { UserItemProps } from '~/types/common'

const UserItem: FC<UserItemProps> = ({
  fullName,
  department,
  country,
  status,
  onDelete
}) => {
  return (
    <>
      <TableCell sx={{...styles.cell, ...styles.firstLastItemCell, ...styles.fullNameCell, pr: '10px'}}>{fullName}</TableCell>
      <TableCell sx={{...styles.cell, ...styles.additionalCell}}>{department}</TableCell>
      <TableCell sx={styles.cell} colSpan={2}></TableCell>
      <TableCell sx={{...styles.cell, ...styles.additionalCell}}>{country}</TableCell>
      <TableCell sx={{...styles.cell, ...styles.additionalCell}}>{status}</TableCell>
      <TableCell sx={{...styles.cell, ...styles.firstLastItemCell, pl: '10px'}}>
        <IconButton onClick={onDelete} aria-label='delete'>
          <DeleteOutlineIcon />
        </IconButton>
      </TableCell>
    </>
  )
}

export default UserItem
