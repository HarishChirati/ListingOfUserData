export interface User {
  name: {
    first: string
    last: string
  }
  login: {
    username: string
  }
  email: string
  phone: string
  cell: string
  picture: {
    thumbnail: string
    medium: string
  }
  location: {
    city: string
    country: string
    state: string
  }
  dob: {
    age: string | number
  }
}

export interface UserState {
  users: User[],
  user: User
}

export interface Storetype {
  userState: UserState
}

type Payload = User[]

export type UserAction = {
  type: 'SET_SINGLE_USER'
  payload: User
}

export type UserListAction = {
  type: 'SET_USERS' | 'ADD_USERS'
  payload: Payload
}