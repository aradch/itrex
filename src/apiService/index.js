const users = []
const doctorAppointment = []

export function signUp(firstName, lastName, email, password) {
  const existedUser = users.find((userItem) => {
    return userItem.email === email
  })

  if (existedUser) {
    // throw new Error(`User with email ${email} is already exist`)
    console.log(`User with email ${email} is already exist`)
    return { ok: false }
  } else {
    const user = {
      id: Date.now(),
      firstName,
      lastName,
      email,
      password,
    }

    users.push(user)

    return { ok: true }
  }
}

export function signIn(email, password) {
  const user = users.find((userItem) => {
    return userItem.email === email && userItem.password === password
  })

  if (!user) {
    // throw new Error("Email or password is not correct")
    console.log("Email or password is not correct")
    return { ok: false }
  } else {
    return { ok: true }
  }

}

export function requestToResetPassword(email) {
  const user = users.find((userItem) => {
    return userItem.email === email
  })

  if (!user) {
    // throw new Error("Email is not found")
    console.log("Email is not found")
    return { ok: false }
  } else {
    return { ok: true }
  }
}

export function createAppointment(occupation, doctorName, reasonVisit, note, date, time) {
  const appointment = {
    id: Date.now(),
    occupation,
    doctorName,
    reasonVisit,
    note,
    date,
    time,
  }

  doctorAppointment.push(appointment)

  console.log(doctorAppointment)
  console.log(appointment)

  return appointment
}

