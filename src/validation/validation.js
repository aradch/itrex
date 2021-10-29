import { sendFormData } from '../sendFormData.js';

export const validation = (path) => {
  // get form and items of form
  const form = document.querySelector(".form")
  const firstName = document.getElementById("first-name")
  const lastName = document.getElementById("last-name")
  const email = document.getElementById("email")
  const password = document.getElementById("password")
  const confirmPassword = document.getElementById("confirm-password")

  // checked the form for content
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      checkInputs()

      let itemsForm = e.target.querySelectorAll('.form__validate')
      itemsForm = Array.prototype.slice.call(itemsForm)
      itemsForm = itemsForm.every((elem) => !elem.classList.contains("error"))

      // send data when each input passed the validation check successfully
      if (itemsForm) {
        sendFormData(e, path, form)
      }
    })
  }
  function checkInputs() {
    // get the values from the inputs
    const firstNameValue = (firstName && firstName.value.trim())
    const lastNameValue = (lastName && lastName.value.trim())
    const emailValue = (email && email.value.trim())
    const passwordValue = (password && password.value.trim())
    const confirmPasswordValue = (confirmPassword && confirmPassword.value.trim())

    const regExpFirstName = /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/;
    const regExpLastName = /^\s*[A-ZА-Я][a-zа-я]+('[a-zа-я]+|-[A-ZА-Я][a-zа-я]+)?\s*$/u
    const regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regExpPassword = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/;


    // checked inputs for value
    if (firstNameValue !== null) {
      if (firstNameValue === "") {
        // show error
        // add class error
        setErrorFor(firstName, "First Name cannot be blank")
      } else if (!regExpFirstName.test(firstNameValue)) {
        setErrorFor(firstName, "First Name contain unsupported characters")
      }
      else {
        // remove class error 
        setSuccessFor(firstName)
      }
    }

    if (lastNameValue !== null) {
      if (lastNameValue === "") {
        // show error
        // add class error
        setErrorFor(lastName, "Last Name cannot be blank")
      } else if (!regExpLastName.test(lastNameValue)) {
        setErrorFor(lastName, "Last Name contain unsupported characters")
      } else {
        // remove class error 
        setSuccessFor(lastName)
      }
    }

    if (emailValue !== null) {
      if (emailValue === "") {
        // show error
        // add class error
        setErrorFor(email, "Email not found. Please check the spelling")
      } else if (!regExpEmail.test(emailValue)) {
        setErrorFor(email, "Email contain unsupported characters")
      } else {
        // remove class error
        setSuccessFor(email)
      }
    }

    if (passwordValue !== null) {
      if (passwordValue === "") {
        // show error
        // add class error
        setErrorFor(password, "Password cannot be blank")
      } else if (!regExpPassword.test(passwordValue)) {
        setErrorFor(password, "Password contain unsupported characters")
      } else {
        // remove class error
        setSuccessFor(password)
      }
    }

    if (confirmPasswordValue !== null) {
      if (confirmPasswordValue === "") {
        // show error
        // add class error
        setErrorFor(confirmPassword, "Confirm Password cannot be blank")
      } else if (passwordValue !== confirmPasswordValue) {
        setErrorFor(confirmPassword, "Confirm Password does not match")
      } else if (!regExpPassword.test(confirmPasswordValue)) {
        setErrorFor(confirmPassword, "Confirm Password contain unsupported characters")
      } else {
        // remove class error
        setSuccessFor(confirmPassword)
      }
    }
  }

  function setErrorFor(input, message) {
    // get parent of input
    const formValidate = input.parentElement
    const errorMessage = formValidate.querySelector(".form__error-message")

    // add error message 
    errorMessage.textContent = message

    // add class error
    formValidate.classList.add("error")
  }

  function setSuccessFor(input) {
    // get parent of input
    const formValidate = input.parentElement

    // remove error class
    formValidate.classList.remove("error")
  }
}

