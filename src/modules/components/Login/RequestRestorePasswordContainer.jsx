import React, { useState } from "react"
import { useTitle } from 'react-use'
import { Redirect } from 'react-router'

import { RequestRestorePassword } from './RequestRestorePassword'

import { validator } from './../../utils/validation/validator'
import { setSuccessFor } from './../../utils/validation/setSuccessFor'
import { requestToResetPassword } from './../../../apiService/index'




export const RequestRestorePasswordContainer = () => {
  const [auth, setAuth] = useState(false)

  const [emailValue, setEmailValue] = useState("")

  const [defaultErrorMessage, setDefaultErrorMessage] = useState({ "email": "Error message" })

  const [errorMessage, setErrorMessage] = useState({ "email": "" })
  const [choiceIdInput, setChoiceIdInput] = useState("")
  const [errorIlluminationInput, setErrorIlluminationInput] = useState({ "email": "" })


  useTitle("Login | Restore Password")


  const onInputChoice = (e) => {
    validator(e.target.id, null, null, emailValue, null, null, setDefaultErrorMessage, setErrorMessage, setChoiceIdInput, setErrorIlluminationInput)
  }


  const onValueChange = (e) => {
    switch (e.target.id) {
      case "email":
        setEmailValue(e.target.value)
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
        email: emailValue
      }

      const response = requestToResetPassword(formData.email)
      if (response.ok) return setAuth(true)
    }
  }

  if (auth) return <Redirect to="/login/success-restore-password" />


  return (
    <RequestRestorePassword
      defaultErrorMessage={defaultErrorMessage} errorMessage={errorMessage}
      errorIlluminationInput={errorIlluminationInput}
      onInputChoice={onInputChoice} onValueChange={onValueChange}
      sendFormData={sendFormData} emailValue={emailValue}
    />
  )
}