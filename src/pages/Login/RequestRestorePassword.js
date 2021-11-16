import React from "react"
import { LayoutRestorePassword } from './../../modules/layouts/LayoutLogin/LayoutRestorePassword'
import { FormInputBlock } from "../../modules/components/FormInputBlock"
import { Button } from '../../components/Button'

import imgInputEmail from "../../assets/login/email.svg"
import imgButtonArrowRight from "../../assets/login/angle-right-b.svg"



export const RequestRestorePassword = ({
  defaultErrorMessage,
  errorMessage,
  errorIlluminationInput,
  onInputChoice,
  onValueChange,
  sendFormData,
  emailValue }) => {

  return (

    <LayoutRestorePassword
      generalHeaderText="Restore Password"
      sendFormData={sendFormData}
      headerContent="Please use your email address, and we’ll send you the link to reset your password"
      redirectUrl="/login/sign-in"
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

      <Button
        bgImageUrl={imgButtonArrowRight}
        buttonLetterSpacing="1.4px"
      >
        Send Reset Link
      </Button>
    </LayoutRestorePassword>
  )
}