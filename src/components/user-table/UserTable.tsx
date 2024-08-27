import React, { FC } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material'

import UserItem from '~/components/user-item/UserItem'
import { styles } from '~/components/user-table/UserTable.styles'

import { UsersTableProps } from '~/types/common'

const UsersTable: FC<UsersTableProps> = ({ users, onDelete }) => {
  return (
    <TableContainer component={Paper} sx={styles.tableContainer}>
      <Table sx={{ minWidth: 650 }} aria-label='users table'>
        <TableHead sx={styles.tableHead}>
          <TableRow>
            <TableCell
              sx={{ ...styles.columnTitle, ...styles.firstLastItemCell }}
            >
              Full Name
            </TableCell>
            <TableCell sx={{ ...styles.columnTitle, ...styles.middleItemCell }}>
              Department
            </TableCell>
            <TableCell
              sx={{ ...styles.columnTitle, ...styles.middleItemCell }}
              colSpan={2}
            ></TableCell>
            <TableCell sx={{ ...styles.columnTitle, ...styles.middleItemCell }}>
              Country
            </TableCell>
            <TableCell
              sx={{
                ...styles.columnTitle,
                ...styles.firstLastItemCell,
                pl: '10px'
              }}
            >
              Status
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.name}>
              <UserItem
                fullName={user.name}
                department={user.department.name}
                country={user.country.name}
                status={user.status.name}
                onDelete={() => onDelete(user.name)}
              />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default UsersTable
