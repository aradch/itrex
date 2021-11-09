import { setSuccessFor } from './setSuccessFor'


export const validator = (id, firstNameValue, lastNameValue, emailValue, passwordValue, confirmPasswordValue, setDefaultErrorMessage, setErrorMessage, setChoiceIdInput, setErrorIlluminationInput) => {

  const regExpFirstName = /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/
  const regExpLastName = /^\s*[A-ZА-Я][a-zа-я]+('[a-zа-я]+|-[A-ZА-Я][a-zа-я]+)?\s*$/u
  const regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const regExpPassword = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/


  onInputChoice(id)


  function checkInput(inputValue, regExp, inputName) {
    if (inputValue === "") {
      setErrorFor(`${inputName} cannot be blank`)
    } else if (!regExp.test(inputValue)) {
      setErrorFor(`${inputName} contain unsupported characters`)
    }
    else {
      setSuccessFor(setErrorIlluminationInput, setErrorMessage, setDefaultErrorMessage, id)
    }
  }

  function setErrorFor(message) {
    setErrorMessage((errorMessage) => ({ ...errorMessage, [id]: true }))
    setErrorIlluminationInput((errorIlluminationInput) => ({ ...errorIlluminationInput, [id]: "#ff2567" }))
    setDefaultErrorMessage((defaultErrorMessage) => ({ ...defaultErrorMessage, [id]: message }))
  }


  function onInputChoice(id) {
    switch (id) {
      case "first-name":
        checkInput(firstNameValue, regExpFirstName, "First Name")
        setChoiceIdInput("first-name")
        break

      case "last-name":
        checkInput(lastNameValue, regExpLastName, "Last Name")
        setChoiceIdInput("last-name")
        break

      case "email":
        checkInput(emailValue, regExpEmail, "Email")
        setChoiceIdInput("email")
        break

      case "password":
        checkInput(passwordValue, regExpPassword, "Password")
        if (
          passwordValue !== confirmPasswordValue &&
          passwordValue !== "" &&
          regExpPassword.test(passwordValue) &&
          confirmPasswordValue !== "" &&
          regExpPassword.test(confirmPasswordValue)
        ) {
          setErrorFor("Password does not match")
        }
        setChoiceIdInput("password")
        break

      case "confirm-password":
        if (passwordValue !== confirmPasswordValue) {
          setErrorFor("Confirm Password does not match")
        } else {
          checkInput(confirmPasswordValue, regExpPassword, "Confirm Password")
        }
        setChoiceIdInput("confirm-password")
        break

      default:
        break
    }
  }
}

