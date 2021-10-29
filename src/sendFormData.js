import { signUp, signIn, requestToResetPassword } from './apiService/index.js';

export const sendFormData = (e, path, form) => {
  const elem = e.target

  const firstName = (elem.querySelector('[id="first-name"]') && elem.querySelector('[id="first-name"]').value)
  const lastName = (elem.querySelector('[id="last-name"]') && elem.querySelector('[id="last-name"]').value)
  const email = (elem.querySelector('[id="email"]') && elem.querySelector('[id="email"]').value)
  const password = (elem.querySelector('[id="password"]') && elem.querySelector('[id="password"]').value)

  let formData = {
    firstName,
    lastName,
    email,
    password
  }


  if (path === "/itrex/") {
    signUp(formData.firstName, formData.lastName, formData.email, formData.password)
    form.reset()
  }
  if (path === "/itrex/sign-in") {
    signIn(formData.email, formData.password)
    form.reset()
  }
  if (path === "/itrex/restore-password") {
    requestToResetPassword(formData.email)
  }
}