import React, { useState } from "react"
import { useTitle } from 'react-use'
import { Redirect } from 'react-router'

import { SignIn } from './SignIn'

import { validator } from './../../utils/validation/validator'
import { setSuccessFor } from './../../utils/validation/setSuccessFor'
import { signIn } from "../../../apiService/index"




export const SignInContainer = () => {
  const [auth, setAuth] = useState(false)

  const [emailValue, setEmailValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")


  const [defaultErrorMessage, setDefaultErrorMessage] = useState(
    {
      "email": "Error message",
      "password": "Error message",
    }
  )

  const [errorMessage, setErrorMessage] = useState(
    {
      "email": "",
      "password": "",
    }
  )
  const [choiceIdInput, setChoiceIdInput] = useState("")
  const [errorIlluminationInput, setErrorIlluminationInput] = useState(
    {
      "email": "",
      "password": "",
    }
  )


  useTitle("Login | Sign In")


  const onInputChoice = (e) => {
    validator(e.target.id, null, null, emailValue, passwordValue, null, setDefaultErrorMessage, setErrorMessage, setChoiceIdInput, setErrorIlluminationInput)
  }


  const onValueChange = (e) => {
    switch (e.target.id) {
      case "email":
        setEmailValue(e.target.value)
        setSuccessFor(setErrorIlluminationInput, setErrorMessage, setDefaultErrorMessage, e.target.id)
        break

      case "password":
        setPasswordValue(e.target.value)
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
        email: emailValue,
        password: passwordValue
      }


      const response = signIn(formData.email, formData.password)
      if (response.ok) return setAuth(true)
    }
  }

  if (auth) return <Redirect to="/patient-view" />


  return (
    <SignIn
      defaultErrorMessage={defaultErrorMessage} errorMessage={errorMessage}
      errorIlluminationInput={errorIlluminationInput}
      onInputChoice={onInputChoice} onValueChange={onValueChange}
      sendFormData={sendFormData} emailValue={emailValue} passwordValue={passwordValue} />
  )
}