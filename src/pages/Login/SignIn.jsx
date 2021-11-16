import React, { useState } from "react"
import { showHidePassword } from '../../modules/utils/showHidePassword/showHidePassword'
import { FormInputBlock } from './../../modules/components/FormInputBlock'
import { LayoutSignIn } from './../../modules/layouts/LayoutLogin/LayoutSignIn'
import { Button } from '../../components/Button'

import imgInputEmail from "../../assets/login/email.svg"
import imgInputPassword from "../../assets/login/password.svg"

import imgButtonArrowRight from "../../assets/login/angle-right-b.svg"

import imgShowPassword from "../../assets/login/eye-slash.svg"
import imgHidePassword from "../../assets/login/eye.svg"



export const SignIn = ({
  defaultErrorMessage,
  errorMessage,
  errorIlluminationInput,
  onInputChoice,
  onValueChange,
  sendFormData,
  emailValue,
  passwordValue }) => {

  const [showPassword, setShowPassword] = useState(false)
  const [typeInputPassword, setTypeInputPassword] = useState("password")


  const onTypeInputPasswordChanged = (e) => {
    e.preventDefault()
    showHidePassword(showPassword, setShowPassword, setTypeInputPassword)
  }


  return (

    <LayoutSignIn
      headerText="Sign In"
      sendFormData={sendFormData}
      redirectUrlForgotPassword="/login/restore-password"
      forgotPasswordText="Forgot Password?"
      redirectUrl="/login"
      redirectText="Sign up"
      footerContent="Don’t have an account?"
    >

      <FormInputBlock
        labelText="Email"
        inputId="email"
        inputPlaceholder="Email"
        inputValue={emailValue}
        inputOnChange={onValueChange}
        inputOnBlur={onInputChoice}
        inputBgImageUrl={imgInputEmail}
        inputBgImagePositionBottomPx="15"
        inputBgImagePositionLeftPx="23.4"
        errorIlluminationInput={errorIlluminationInput["email"]}
        showErrorMessage={errorMessage["email"]}
        textErrorMessage={defaultErrorMessage["email"]}
        required={true}
      />

      <FormInputBlock
        labelText="Password"
        inputId="password"
        inputType={typeInputPassword}
        inputPlaceholder="Password"
        inputValue={passwordValue}
        inputOnChange={onValueChange}
        inputOnBlur={onInputChoice}
        inputBgImageUrl={imgInputPassword}
        inputBgImagePositionBottomPx="17"
        inputBgImagePositionLeftPx="27"
        errorIlluminationInput={errorIlluminationInput["password"]}
        showErrorMessage={errorMessage["password"]}
        textErrorMessage={defaultErrorMessage["password"]}
        imageUrlShowHidePassword={
          showPassword ?
            imgShowPassword :
            imgHidePassword
        }
        onTypeInputChanged={onTypeInputPasswordChanged}
        required={true}
      />

      <Button bgImageUrl={imgButtonArrowRight}>Sign In</Button>
    </LayoutSignIn>
  )
}

