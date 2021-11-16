import React, { useState } from "react"
import { Button } from "../../components/Button"
import { FormInputBlock } from "../../modules/components/FormInputBlock"
import { LayoutSignUp } from './../../modules/layouts/LayoutLogin/LayoutSignUp'
import { showHideConfirmPassword, showHidePassword } from '../../modules/utils/showHidePassword/showHidePassword'

import imgInputName from "../../assets/login/name.svg"
import imgInputEmail from "../../assets/login/email.svg"
import imgInputPassword from "../../assets/login/password.svg"
import imgInputConfirmPassword from "../../assets/login/confirm-password.svg"

import imgButtonArrowRight from "../../assets/login/angle-right-b.svg"

import imgShowPassword from "../../assets/login/eye-slash.svg"
import imgHidePassword from "../../assets/login/eye.svg"



export const SignUp = ({
  defaultErrorMessage,
  errorMessage,
  errorIlluminationInput,
  onInputChoice,
  onValueChange,
  sendFormData,
  firstNameValue,
  lastNameValue,
  emailValue,
  passwordValue,
  confirmPasswordValue }) => {

  const [showPassword, setShowPassword] = useState(false)
  const [typeInputPassword, setTypeInputPassword] = useState("password")

  const [showHConfirmPassword, setShowConfirmPassword] = useState(false)
  const [typeInputConfirmPassword, setTypeInputConfirmPassword] = useState("password")


  const onTypeInputPasswordChanged = (e) => {
    e.preventDefault()
    showHidePassword(showPassword, setShowPassword, setTypeInputPassword,)
  }

  const onTypeInputConfirmPasswordChanged = (e) => {
    e.preventDefault()
    showHideConfirmPassword(showHConfirmPassword, setShowConfirmPassword, setTypeInputConfirmPassword)
  }


  return (

    <LayoutSignUp
      headerText="Sign Up"
      sendFormData={sendFormData}
      redirectUrl="/login/sign-in"
      redirectText="Sign in"
      footerContent="Already have an account?"
    >
      <FormInputBlock
        labelText="First Name"
        inputId="first-name"
        inputPlaceholder="First Name"
        inputValue={firstNameValue}
        inputOnChange={onValueChange}
        inputOnBlur={onInputChoice}
        inputBgImageUrl={imgInputName}
        inputBgImagePositionBottomPx="17"
        inputBgImagePositionLeftPx="25"
        errorIlluminationInput={errorIlluminationInput["first-name"]}
        showErrorMessage={errorMessage["first-name"]}
        textErrorMessage={defaultErrorMessage["first-name"]}
        required={true}
      />

      <FormInputBlock
        labelText="Last Name"
        inputId="last-name"
        inputPlaceholder="Last Name"
        inputValue={lastNameValue}
        inputOnChange={onValueChange}
        inputOnBlur={onInputChoice}
        inputBgImageUrl={imgInputName}
        inputBgImagePositionBottomPx="17"
        inputBgImagePositionLeftPx="25"
        errorIlluminationInput={errorIlluminationInput["last-name"]}
        showErrorMessage={errorMessage["last-name"]}
        textErrorMessage={defaultErrorMessage["last-name"]}
        required={true}
      />

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

      <FormInputBlock
        labelText="Confirm Password"
        inputId="confirm-password"
        inputType={typeInputConfirmPassword}
        inputPlaceholder="Confirm Password"
        inputValue={confirmPasswordValue}
        inputOnChange={onValueChange}
        inputOnBlur={onInputChoice}
        inputBgImageUrl={imgInputConfirmPassword}
        inputBgImagePositionBottomPx="21"
        inputBgImagePositionLeftPx="28"
        errorIlluminationInput={errorIlluminationInput["confirm-password"]}
        showErrorMessage={errorMessage["confirm-password"]}
        textErrorMessage={defaultErrorMessage["confirm-password"]}
        imageUrlShowHidePassword={
          showHConfirmPassword ?
            imgShowPassword :
            imgHidePassword
        }
        onTypeInputChanged={onTypeInputConfirmPasswordChanged}
        required={true}
      />

      <Button bgImageUrl={imgButtonArrowRight}>Sign Up</Button>
    </LayoutSignUp>
  )
}