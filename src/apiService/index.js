import { render } from './../index.js';

const users = []

export function signUp(firstName, lastName, email, password) {
  const existedUser = users.find((userItem) => {
    return userItem.email === email
  })

  if (existedUser) {
    throw new Error(`User with email ${email} is already exist`)
  }

  const user = {
    id: Date.now(),
    firstName,
    lastName,
    email,
    password,
  }

  users.push(user)

  return user

}

export function signIn(email, password) {
  const user = users.find((userItem) => {
    return userItem.email === email && userItem.password === password
  })

  if (!user) {
    throw new Error(`Email or password is not correct`)
  }

  return user
}

export function requestToResetPassword(email) {
  const user = users.find((userItem) => {
    return userItem.email === email
  })

  if (user) {
    render("/itrex/done-restore-password")
  } else {
    throw new Error(`Email is not found`)
  }

  return user
}
