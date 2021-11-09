export const setSuccessFor = (setErrorIlluminationInput, setErrorMessage, setDefaultErrorMessage, id) => {

  setErrorMessage((errorMessage) => ({ ...errorMessage, [id]: "" }))
  setErrorIlluminationInput((errorIlluminationInput) => ({ ...errorIlluminationInput, [id]: "" }))
  setDefaultErrorMessage((defaultErrorMessage) => ({ ...defaultErrorMessage, [id]: "" }))
}
