import React, { useState } from "react"
import { useTitle } from "react-use"
import { Redirect } from "react-router"

import { SignUp } from './SignUp'

import { validator } from './../../utils/validation/validator'
import { setSuccessFor } from './../../utils/validation/setSuccessFor'
import { signUp } from './../../../apiService/index'




export const SignUpContainer = () => {
  const [auth, setAuth] = useState(false)

  const [firstNameValue, setFirstNameValue] = useState("")
  const [lastNameValue, setLastNameValue] = useState("")
  const [emailValue, setEmailValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("")


  const [defaultErrorMessage, setDefaultErrorMessage] = useState(
    {
      "first-name": "Error message",
      "last-name": "Error message",
      "email": "Error message",
      "password": "Error message",
      "confirm-password": "Error message",
    }
  )

  const [errorMessage, setErrorMessage] = useState(
    {
      "first-name": "",
      "last-name": "",
      "email": "",
      "password": "",
      "confirm-password": "",
    }
  )
  const [choiceIdInput, setChoiceIdInput] = useState("")
  const [errorIlluminationInput, setErrorIlluminationInput] = useState(
    {
      "first-name": "",
      "last-name": "",
      "email": "",
      "password": "",
      "confirm-password": "",
    }
  )


  useTitle("Login | Sign Up")


  const onInputChoice = (e) => {
    validator(e.target.id, firstNameValue, lastNameValue, emailValue, passwordValue, confirmPasswordValue, setDefaultErrorMessage, setErrorMessage, setChoiceIdInput, setErrorIlluminationInput)
  }


  const onValueChange = (e) => {
    switch (e.target.id) {
      case "first-name":
        setFirstNameValue(e.target.value)
        setSuccessFor(setErrorIlluminationInput, setErrorMessage, setDefaultErrorMessage, e.target.id)
        break

      case "last-name":
        setLastNameValue(e.target.value)
        setSuccessFor(setErrorIlluminationInput, setErrorMessage, setDefaultErrorMessage, e.target.id)
        break

      case "email":
        setEmailValue(e.target.value)
        setSuccessFor(setErrorIlluminationInput, setErrorMessage, setDefaultErrorMessage, e.target.id)
        break

      case "password":
        setPasswordValue(e.target.value)
        setSuccessFor(setErrorIlluminationInput, setErrorMessage, setDefaultErrorMessage, e.target.id)
        break

      case "confirm-password":
        setConfirmPasswordValue(e.target.value)
        setSuccessFor(setErrorIlluminationInput, setErrorMessage, setDefaultErrorMessage, e.target.id)
        break

      default:
        break
    }
  }


  const sendFormData = (e) => {
    e.preventDefault()

    let errorChecked = Object.values(errorMessage).includes(true)


    if (!errorChecked) {
      let formData = {
        firstName: firstNameValue,
        lastName: lastNameValue,
        email: emailValue,
        password: passwordValue
      }

      const response = signUp(formData.firstName, formData.lastName, formData.email, formData.password)
      if (response.ok) return setAuth(true)
    }
  }

  if (auth) return <Redirect to="/doctor-view" />


  return (
    <SignUp
      defaultErrorMessage={defaultErrorMessage} errorMessage={errorMessage}
      errorIlluminationInput={errorIlluminationInput}
      onInputChoice={onInputChoice} onValueChange={onValueChange}
      sendFormData={sendFormData} firstNameValue={firstNameValue}
      lastNameValue={lastNameValue} emailValue={emailValue}
      passwordValue={passwordValue} confirmPasswordValue={confirmPasswordValue} />
  )
}