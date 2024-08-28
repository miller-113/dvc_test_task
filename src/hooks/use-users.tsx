import { useState, useEffect } from 'react'
import { UserInterface } from '~/types/common'
import { users as initialUsers } from '~/dummyData'

const useUsers = () => {
  const [users, setUsers] = useState<UserInterface[]>([])

  useEffect(() => {
    const storedUsers = localStorage.getItem('users')
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers))
    } else {
      setUsers(initialUsers)
      localStorage.setItem('users', JSON.stringify(initialUsers))
    }
  }, [])

  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem('users', JSON.stringify(users))
    }
  }, [users])

  return [users, setUsers] as const
}

export default useUsers
