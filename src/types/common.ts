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