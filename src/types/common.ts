import { Dispatch, SetStateAction } from "react"

export interface Item {
  name: string
  value: string
}
export interface UserInterface {
  name: string
  status: Item
  department: Item
  country: Item
}

export type UserItemProps = {
  fullName: string
  department: string
  country: string
  status: string
  onDelete: () => void
}

export interface UsersTableProps {
  users: UserInterface[]
  onDelete: (name: string) => void
}

export type AddUserModalProps = {
  isOpen: boolean
  onClose: () => void
  users: UserInterface[]
  onSaveUser: Dispatch<SetStateAction<UserInterface[]>>
}