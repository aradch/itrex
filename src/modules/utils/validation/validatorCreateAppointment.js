import { setSuccessFor } from './setSuccessFor'


export const validatorCreateAppointment = (
  id,
  reasonVisitValue,
  selectOccupationValue,
  selectDoctorNameValue,
  setDefaultErrorMessage,
  setErrorMessage,
  setChoiceIdInput,
  setErrorIlluminationInput,
  setDisabledUI
) => {


  onInputChoice(id)


  function checkInput(inputValue, inputName) {
    if (inputValue === "") {
      setErrorFor(`${inputName} cannot be blank`)
    } else {
      setSuccessFor(setErrorIlluminationInput, setErrorMessage, setDefaultErrorMessage, id)
    }
  }

  function checkSelect(selectValue, selectName) {
    if (selectValue === "") {
      setErrorFor(`Please choose ${selectName}`)
    } else {
      setSuccessFor(setErrorIlluminationInput, setErrorMessage, setDefaultErrorMessage, id)
      if (selectOccupationValue && selectDoctorNameValue) return setDisabledUI(false)
    }
  }

  function setErrorFor(message) {
    setErrorMessage((errorMessage) => ({ ...errorMessage, [id]: true }))
    setErrorIlluminationInput((errorIlluminationInput) => ({ ...errorIlluminationInput, [id]: "#ff2567" }))
    setDefaultErrorMessage((defaultErrorMessage) => ({ ...defaultErrorMessage, [id]: message }))
  }


  function onInputChoice(id) {
    switch (id) {
      case "reason-visit":
        checkInput(reasonVisitValue, "Reason for the visit")
        setChoiceIdInput("reason-visit")
        break

      case "occupation":
        checkSelect(selectOccupationValue, "an occupation")
        setChoiceIdInput("occupation")
        break

      case "doctor-name":
        checkSelect(selectDoctorNameValue, "a doctor's name")
        setChoiceIdInput("doctor-name")
        break

      default:
        break
    }
  }
}

